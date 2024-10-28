async function sendRequests() {
    try {
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
      
        await fetch('https://h111.freshservice.com/api/_/agents/59000290542/map_workspace_groups_and_roles', {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'X-Csrf-Token': csrfToken
            },
            body: '{"observer_of":[],"member_of":[],"roles":[{"role_id":59000040756,"assignment_scope":"entire_helpdesk"}],"workspace_id":1}'
        });
        await fetch('https://h111.freshservice.com/api/_/agents/59000290542/map_workspace_groups_and_roles', {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'X-Csrf-Token': csrfToken
            },
            body: `{"observer_of":[],"member_of":[],"roles":[{"role_id":59000040757,"assignment_scope":"entire_helpdesk"},{"role_id":59000040758,"assignment_scope":"entire_helpdesk"},{"role_id":59000040759,"assignment_scope":"entire_helpdesk"},{"role_id":59000040760,"assignment_scope":"entire_helpdesk"},{"role_id":59000040761,"assignment_scope":"entire_helpdesk"},{"role_id":59000040762,"assignment_scope":"entire_helpdesk"},{"role_id":59000040763,"assignment_scope":"entire_helpdesk"},{"role_id":59000040764,"assignment_scope":"entire_helpdesk"},{"role_id":59000040765,"assignment_scope":"entire_helpdesk"},{"role_id":59000040766,"assignment_scope":"entire_helpdesk"},{"role_id":59000040767,"assignment_scope":"entire_helpdesk"},{"role_id":59000040768,"assignment_scope":"entire_helpdesk"},{"role_id":59000040769,"assignment_scope":"entire_helpdesk"},{"role_id":59000040770,"assignment_scope":"entire_helpdesk"},{"role_id":59000040771,"assignment_scope":"entire_helpdesk"},{"role_id":59000040772,"assignment_scope":"entire_helpdesk"},{"role_id":59000040773,"assignment_scope":"entire_helpdesk"}],"workspace_id":2}`
        });

        console.log('Requests completed successfully');
    } catch (error) {
        console.error('Error:', error);
    }
}

sendRequests();
