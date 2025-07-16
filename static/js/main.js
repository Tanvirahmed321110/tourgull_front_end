
// Open Modal Function
function openModalF(modalId, btnSelector) {
    const modal = document.getElementById(modalId)
    const overlay = document.querySelector('.modal-overlay');
    const btns = document.querySelectorAll(btnSelector)


    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            modal.classList.add('active')
            overlay.classList.add('active')
        })
    })
}



// show and hide password
function showHidePassordF() {
    const btns = document.querySelectorAll('.show-hide-password')
    if (btns) {
        btns.forEach(btn => {
            btn.addEventListener('click', function () {
                const parent = this.closest('.my-input-control');
                const passwordInput = parent.querySelector('input');
                const icon = this.querySelector('i');

                if (passwordInput.type === 'password') {
                    passwordInput.type = 'text';
                    icon.classList.remove('ri-eye-line');
                    icon.classList.add('ri-eye-off-line');
                } else {
                    passwordInput.type = 'password';
                    icon.classList.remove('ri-eye-off-line');
                    icon.classList.add('ri-eye-line');
                }
            });
        })
    }
}
showHidePassordF()







// =====  For Mobile Menu  =====
function mobileMenuF() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');

    if (mobileMenuBtn) {
        const sidebar = document.getElementById('sidebar');

        mobileMenuBtn.addEventListener('click', function () {
            sidebar.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active'); // Toggle X animation
        });
    }
}
mobileMenuF();




/// For click dropdown
function dropdownToggleF() {
    const btns = document.querySelectorAll('.dropdown-btn');

    if (btns) {
        btns.forEach(btn => {
            btn.addEventListener('click', function () {
                const dropdownParent = btn.closest('.click-dropdown-parent');
                const dropdown = dropdownParent.querySelector('.click-dropdown')
                if (dropdown) {
                    dropdown.classList.toggle('active');
                }

                // Close all other dropdowns
                document.querySelectorAll('.click-dropdown').forEach(other => {
                    if (other !== dropdown) other.classList.remove('active');
                });

            });
        });
    }


    // Click outside to close
    document.addEventListener('click', function (e) {
        document.querySelectorAll('.click-dropdown').forEach(dropdown => {
            if (!e.target.closest('.click-dropdown-parent')) {
                dropdown.classList.remove('active');
            }
        });
    });
}
dropdownToggleF()




// sidebar close and open function
function sidebarCloseOpenF() {
    const sidebar = document.getElementById('sidebar')
    const sidebarBtn = document.getElementById('sidebar-btn')
    const mainContent = document.getElementById('main-contents')

    if (sidebar) {
        sidebarBtn.addEventListener('click', function () {
            sidebar.classList.toggle('close')
            mainContent.classList.toggle('active')
        })
    }
}
sidebarCloseOpenF()


// Open and close modal
function closeAndOpenF(closeButtonId, closeModalId, openModalId) {
    const closeButton = document.getElementById(closeButtonId);
    const closeModal = document.getElementById(closeModalId);
    const openModal = document.getElementById(openModalId);

    closeButton.addEventListener('click', function () {
        closeModal.classList.remove('active');

        openModal.classList.add('active');
    });
}


// close button function
function closeButtonF() {
    document.addEventListener('DOMContentLoaded', () => {
        const closeButtons = document.querySelectorAll('.modal-close-btn');
        const overlay = document.querySelector('.modal-overlay');
        const modals = document.querySelectorAll('.my-modal');

        modals.forEach(modal => {
            modal.addEventListener('click', function (e) {
                // If clicked directly on the modal (not on modal-content)
                if (e.target === modal) {
                    modal.classList.remove('active');
                    document.querySelector('.modal-overlay')?.classList.remove('active');
                }
            });
        });

        closeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const modal = btn.closest('.my-modal');
                const notification = btn.closest('.notification');

                if (modal) {
                    modal.classList.remove('active');
                    overlay?.classList.remove('active'); // only modal close e overlay off
                }

                if (notification) {
                    notification.classList.remove('active');
                }
            });
        });


        // Close when overlay is clicked
        if (overlay) {
            overlay.addEventListener('click', () => {
                document.querySelectorAll('.my-modal.active').forEach(modal => {
                    modal.classList.remove('active');
                });
                overlay.classList.remove('active');
            });
        }
    });
}

closeButtonF()





// function initSingleSelect(wrapperSelector, isMultiple) {
//     const select = document.querySelector(wrapperSelector);
//     if (!select) return;

//     const input = select.querySelector(".multiple-or-single-select-btn");
//     const dropdown = select.querySelector(".dropdown");
//     const items = Array.from(dropdown.querySelectorAll(".item"));
//     const selectedItems = new Set(); // For multiple mode

//     // Toggle dropdown on input click
//     input.addEventListener("click", function (e) {
//         e.stopPropagation();
//         dropdown.classList.add("active");
//         filterItems(""); // Show all
//     });

//     // Filter and update active state when typing
//     input.addEventListener("input", function () {
//         const query = this.value.trim().toLowerCase();
//         filterItems(query);

//         if (isMultiple) {
//             const currentValues = input.value
//                 .split(",")
//                 .map(s => s.trim())
//                 .filter(Boolean);

//             selectedItems.clear();
//             currentValues.forEach(val => selectedItems.add(val));

//             items.forEach(item => {
//                 const text = item.textContent.trim();
//                 if (selectedItems.has(text)) {
//                     item.classList.add("active");
//                 } else {
//                     item.classList.remove("active");
//                 }
//             });
//         } else {
//             // For single select: if input is cleared, remove all active
//             if (input.value.trim() === "") {
//                 items.forEach(i => i.classList.remove("active"));
//             }
//         }
//     });

//     // Handle item selection
//     items.forEach(item => {
//         item.addEventListener("click", function () {
//             const text = this.textContent.trim();

//             if (isMultiple) {
//                 this.classList.toggle("active");

//                 if (this.classList.contains("active")) {
//                     selectedItems.add(text);
//                 } else {
//                     selectedItems.delete(text);
//                 }

//                 input.value = Array.from(selectedItems).join(", ");
//             } else {
//                 items.forEach(i => i.classList.remove("active"));
//                 this.classList.add("active");
//                 input.value = text;
//                 dropdown.classList.remove("active");
//             }
//         });
//     });

//     // Close dropdown on outside click
//     document.addEventListener("click", function (e) {
//         if (!select.contains(e.target)) {
//             dropdown.classList.remove("active");
//         }
//     });

//     // Filter visible items (without affecting dropdown visibility)
//     function filterItems(query) {
//         items.forEach(item => {
//             const match = item.textContent.toLowerCase().includes(query);
//             item.style.display = match ? "block" : "none";
//         });
//     }
// }


// // For single select:
// initSingleSelect('.supervisor-single-select', true);



$(document).ready(function () {
    $('.js-example-basic-multiple').select2();
});

$(document).ready(function () {
    $('.js-example-basic-single').select2();
});








// delete function
function deleteF(itemClass, btnsClass) {
    const buttons = document.querySelectorAll(btnsClass)
    buttons.forEach((btn) => {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            event.stopPropagation();

            const item = btn.closest(itemClass);
            console.log(item)
            if (item) {
                item.remove();
            } else {
                console.warn("No parent item found for this button.");
            }
        });
    });
}

deleteF('.shopping-cart-modal .item', '.shopping-cart-modal .delete-btn')












// funciton active
function activeF(selector) {
    const items = document.querySelectorAll(selector)

    items.forEach(item => {
        item.addEventListener('click', function () {
            items.forEach(single => {
                single.classList.remove('active')
            })
            item.classList.add('active')
        })
    })
}












// Tab Function
// function tabF(tabSelector, contentSelector) {

//     document.querySelectorAll(tabSelector).forEach(tab => {
//         tab.addEventListener('click', function () {
//             document.querySelectorAll(tabSelector).forEach(t => t.classList.remove('active'));
//             document.querySelectorAll(contentSelector).forEach(tc => tc.classList.remove('active'));

//             this.classList.add('active');
//             document.getElementById(this.dataset.tab).classList.add('active');
//         });
//     });
// }












// document.querySelectorAll('.sidebar-main-menu').forEach(menu => {
//     menu.addEventListener('click', function (e) {
//         e.preventDefault();

//         // Find the dropdown menu next to the clicked link
//         const dropdown = this.nextElementSibling;

//         // Toggle the active class
//         dropdown.classList.toggle('active');

//         // Optionally toggle icon direction
//         const icon = this.querySelector('i');
//         if (icon) {
//             icon.classList.toggle('active');
//         }
//     });
// });









// For Tabs here
function setupTabs(buttonSelector, contentSelector, tabMap) {
    const tabButtons = document.querySelectorAll(buttonSelector);
    const tabContents = document.querySelectorAll(contentSelector);

    if (tabButtons.length === 0 || tabContents.length === 0) return;

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Hide all tab contents
            tabContents.forEach(content => content.classList.remove('active'));

            // Get target content id from map
            const tabName = button.getAttribute('data-tab');
            const targetContentId = tabMap[tabName];

            const targetContent = document.getElementById(targetContentId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}
