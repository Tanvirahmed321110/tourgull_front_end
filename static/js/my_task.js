// for tab button
document.querySelectorAll('.regular-assign-btn button').forEach(button => {
    button.addEventListener('click', function () {
        // Remove active class from siblings
        this.parentElement.querySelectorAll('button').forEach(btn => {
            btn.classList.remove('active');
        });
        // Add active to clicked button
        this.classList.add('active');
    });
});



// Usage tab for visa information page
setupTabs('.regular-assign-btn .tab', '.tab-contents .tab-content', {
    regular_task: 'regular_task_content',
    assign_task: 'assign_task_content'
});


activeF('.list-grid-btn .btn')