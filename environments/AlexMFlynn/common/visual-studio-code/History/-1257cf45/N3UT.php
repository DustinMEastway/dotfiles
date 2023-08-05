<?php
include "../setup.php";
include_once ABSPATH."db.class.php";
include_once ABSPATH."/sheplers.functions.php";
include_once ABSPATH."orderFunctions.php";

include_once ABSPATH_WIDGETS."purchaseFunctions.php";
include_once ABSPATH."carts/cart.class.my.php";
include_once ABSPATH."cart-info/cartInfo.class.my.php";

//show all errors
error_reporting(E_ALL);
ini_set('display_errors', 1);

$cartTableArr=$onlineCartTableArr;

$cartId=0;

if(isset($_REQUEST['cu'])){
    $cu=$_REQUEST['cu'];
    $cartId=0;
    $sql = "SELECT * FROM {$cartTableArr['cart_table']} WHERE (CART_UNIQUE='$cu') LIMIT 1";
    $result=$pdo->prepare($sql);
    $result->execute();
    foreach ($result as $row) {
      $cartId=$row['CART_ID'];
    }
}elseif(isset($_REQUEST['cartId'])){
    $cartId=$_REQUEST['cartId'];
    $sql = "SELECT * FROM {$cartTableArr['cart_table']} WHERE (CART_ID='$cartId') LIMIT 1";
    $result=$pdo->prepare($sql);
    $result->execute();
    foreach ($result as $row) {
      $cu=$row['CART_UNIQUE'];
    }
}

$Cart=new CartMy($pdo);
$Cart->id=$cartId;
$Cart->readOne();
$Cart->getCartDetail(); //leave this there

//$Cart->pmtComplete

//print_R($Cart); exit;//CART_STATUS //PMT_COMPLETE

$CartInfo=new CartInfoMy($pdo);
$CartInfo->cartid=$Cart->id;
$CartInfo->getCartInfo();

if($Cart->pmtComplete==1||$Cart->cartVoid==1){$orderConfirmation=1;}

$todayD=date("m/d/Y",strtotime($today));

// //show all errors
// error_reporting(E_ALL);
// ini_set('display_errors', 1);

$promoTotalAmount=0;
//FIX THIS

//$cartId

$todayD=date("m/d/Y");

$ferryDays=0;
if($CartInfo->departDate>0&&$CartInfo->returnDate>0){
  $ferryDays = GetFerryDays($CartInfo->departDate,$CartInfo->returnDate);
}

$cartType=$Cart->cartType;
$cartActStep=$CartInfo->cartActStep;
$cartStartStep=$CartInfo->cartStartStep;
$departPort=$CartInfo->departPort;

$footerJs="";
if($departPort==1){
    $footerJs.="jQuery('#MacCityParking').show();jQuery('#StIgnaceParking').hide();";
}elseif($departPort==3){
    $footerJs.="jQuery('#MacCityParking').hide();jQuery('#StIgnaceParking').show();";
}
// print_R($CartInfo); exit;

$tabOptions="";
// if($cartType>0){
//     if($cartType==1){$tabOptions.="disabled: [1,2,3],";} 
// }

if(strlen($tabOptions)>0){$tabOptions="{".substr($tabOptions,0,-1)."}";}

$ferryBreadCrumbs=""; //GetBreadcrumbs($pdo,$cartType,$CartInfo);

$ferryStepArr=GetFerryStepArr($cartStartStep);

foreach ($ferryStepArr as $key => $actStep) {
    $ferryStepClass[$actStep]="hideStep";
    //$ferryStepClass[$actStep]=""; //debug
}

// $ferryStepClass[1]="";
$ferryStepClass[$cartActStep]="";
 //echo $cartActStep.$ferryStepClass[$cartActStep];

$cartPrevStep=GetCartPrevStep($cartActStep,$ferryStepArr);

$ferryNextStepJs="javascript:SaveFerryTicketsJs($cartActStep)";
$ferryPrevStepJs="javascript:ChangeStep($cartPrevStep)";

$prevBtnExtraClass="";
if($cartPrevStep==""){$prevBtnExtraClass="hideStep";}

$vehicleInfoArr=GetVehiclesInfoArr($pdo,$cartId,$onlineCartTableArr);
$otherVehiclesCost=$vehicleInfoArr['otherVehiclesCost'];

//setup payment
$nextBtnExtraClass="";
$pmtBtnExtraClass="";
if($cartActStep==10000){
    $nextBtnExtraClass="hideStep";
}else{
    $pmtBtnExtraClass="hideStep";
}

$pageTitle="";
if($orderConfirmation==1){
    $confirmationStr=GetOrderConfirmation($pdo,$Cart->id,$forEmail=2,$onlineCartTableArr,$posOnline=2,$printType=0);
    $emailConfirmationStr=GetOrderConfirmation($pdo,$cartId,$forEmail=1,$onlineCartTableArr,$posOnline=2,$printType=0);
    ///SendPaymentConfirmationEmail($pdo,$emailConfirmationStr,$CartInfo->email);

    $ferryStepArr=array();
    $ferryBreadCrumbs="";
    $pageTitle="Order Confirmation";
}

//

$content.="<div class='conf-container'>$confirmationStr</div>";

//get right column
$content.="<div class='confirmation-right-col no-print'>";
    $content.="<a class='button medium-button' href='javascript:ReSendEmailConfirmationSL(2,$cartId)'>Resend Confirmation</a>";

// print_R($Cart); exit;


if($Cart->cartForever==1){
    $content.="<h2>This is a forever order</h2></div>";
}


if($Cart->cartVoid==1){
    $content.="<h2>This order has been voided</h2></div>";
}else{
    $content.="<div class='confirmation-right-col'>";

    if($Cart->cartDate>=date("Ymd")){
        $content.="<a class='button medium-button' href='/payments/void.php?wa_ws=2&cu=$cu'>Void this Order</a>";
        $content.="<div class='clear'></div>";
    }
    $content.="<a class='button medium-button' href='/payments/form.php?req=returnItems&wa_ws=2&cu=$cu'>Return Items</a>";
}
    $content.="<div class='clear'></div>\n";
    $content.="Email: {$CartInfo->email}<br>";
    // $thisInfo=print_R($CartInfo,true);
    // $content.="$thisInfo";
$content.="</div>";
$content.="<iframe src='/reservations/print.php?req=PrintBlank' id='receipt-container' name='receipt-container' class='print-iframe'></iframe>";

include_once ABSPATH."$pageStructure";
?>
