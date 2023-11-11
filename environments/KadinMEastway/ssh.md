# SSH

The process of setting up a new SSH key on your system:

1. **Generate a New SSH Key**: Use the `ssh-keygen` command to generate a new SSH key pair. The most common type used today is RSA. You can specify the key type and the email address associated with the key as follows:

   ```bash
   ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
   ```

   - `-t rsa` specifies the type of key to create, in this case, RSA.
   - `-b 4096` specifies the key length, with 4096 being a good balance between security and performance.
   - `-C` is a comment field, usually filled with the user's email address for identification.

2. **Press Enter to Save the Key**: The system will ask you where to save the new key. By default, it will choose `~/.ssh/id_rsa`. If this is your primary key or if you don't have any other SSH keys, it's okay to press Enter and use the default location.

3. **Enter a Passphrase (Optional but Recommended)**: For added security, you can enter a passphrase for your SSH key when prompted. This passphrase will be required every time you use the key, adding an extra layer of security.

4. **Start the SSH Agent in the Background**: Run the following command:

   ```bash
   eval "$(ssh-agent -s)"
   ```

   This starts the SSH agent, which manages your SSH keys and remembers your passphrase.

5. **Add Your SSH Key to the SSH Agent**: Use the `ssh-add` command to add your private key to the SSH agent:

   ```bash
   ssh-add ~/.ssh/id_rsa
   ```

6. **Copy Your Public Key to the Clipboard**:
   - On macOS, you can use:
     ```bash
     pbcopy < ~/.ssh/id_rsa.pub
     ```
   - On Linux, you can install xclip (`sudo apt-get install xclip`) and then use:
     ```bash
     xclip -sel clip < ~/.ssh/id_rsa.pub
     ```

7. **Use Your Public Key**: You can now paste your public key into any service that requires it (like GitHub, Bitbucket, GitLab, or SSH servers).

Remember, your private key (`id_rsa`) should be kept secure and private at all times, while the public key (`id_rsa.pub`) is what you distribute to remote systems or services.