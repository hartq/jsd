async function sendRequests() {
    try {
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        // Execute POST request
        await fetch('https://dubaihelpdesk.freshservice.com/itil/requesters/59000326041/make_agent', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Csrf-Token': csrfToken
            },
            body: '_method=put'
        });

        // Execute PUT request
        await fetch('https://dubaihelpdesk.freshservice.com/api/_/agents/59000326041/map_workspace_groups_and_roles', {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'X-Csrf-Token': csrfToken
            },
            body: `{"observer_of":[],"member_of":[],"roles":[{"role_id":59000084114,"assignment_scope":"entire_helpdesk"},{"role_id":59000084116,"assignment_scope":"entire_helpdesk"},{"role_id":59000084115,"assignment_scope":"entire_helpdesk"}],"workspace_id":2}`
        });

        console.log('Requests completed successfully');
    } catch (error) {
        console.error('Error:', error);
    }
}

sendRequests();
