// Check if the current URL is Reddit's homepage or messages page
if (window.location.href === "https://www.reddit.com/" || window.location.href === "https://new.reddit.com/") {
    // Redirect to messages page
    window.location.href = "https://new.reddit.com/message/messages";
}

// When on the messages page, redirect to the homepage after loading
if (window.location.href === "https://new.reddit.com/message/messages") {
    // Wait for the page to fully load
    setTimeout(() => {
        // Find the Reddit logo and click it
        const logo = document.querySelector('a[aria-label="Home"]');
        if (logo) {
            logo.click();
        } else {
            console.error("Logo not found.");
        }
    }, 2000); // Adjust timeout as necessary for page load
}
