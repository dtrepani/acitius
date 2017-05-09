/**
 * On load (load action)
 * 1. Read current state from local storage/user table
 *      (state: pinned, widgets; hidden: true, false; inSubnav: true, false)
 * 2. Call pin (pinned) if current state is pinned
 * 3. Remove or set .hidden based on hidden state
 *
 * Click on pin (pin action)
 * 1. Move widget to .pinned.widgets > .card
 * 2. Show .widget-actions .minimize
 * 3. Show .fixed-actions .chat
 * 4. Set state to state: pinned, hidden: false
 *
 * Click to unpin (unpin action)
 * 1. Move widget to .widgets
 * 2. Remove .card wrapper
 * 3. Hide .widget-actions .minimize
 * 4. Hide .fixed-actions .chat
 * 5. Set state to state: widgets, hidden: false
 *
 * Click on minimize
 * 1. Set to state hidden: true
 * 2. Hide widget
 * 3. Show action circle
 *
 * Click on widget action circle
 * 1. Set to state hidden: false
 * 2. Show widget
 * 3. Hide action circle
 *
 * Click on x
 * 1. Hide widget (DO NOT touch hidden state)
 * 2. Show widgets subnav in nav if hidden
 * 3. Show widget in subnav
 * 4. Set state to inSubnav: true
 *
 * Click on widget in subnav
 * 1. [IMPORTANT: FIRST] Set state to inSubnav: false
 * 1. Call load action
 * 2. Hide widget in subnav
 * 3. Hide widgets subnav if no other widgets present in subnav
 */
export default function() {

}
