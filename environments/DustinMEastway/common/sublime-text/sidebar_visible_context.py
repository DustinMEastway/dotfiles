import sublime, sublime_plugin

class SidebarVisibleContext(sublime_plugin.EventListener):
  def on_query_context(self, view, key, operator, operand, match_all):
    if key != 'sidebar_visible':
      return None

    visible = view.window().is_sidebar_visible()

    return True if visible == operand else None
