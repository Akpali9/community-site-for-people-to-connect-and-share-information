// Mock data for posts and members
const posts = [
    { title: 'First post', content: 'This is the first post.' },
    { title: 'Second post', content: 'This is the second post.' }
];

const members = ['Alice', 'Bob', 'Charlie'];

// Function to load posts
function loadPosts() {
    const postsContainer = document.getElementById('posts');
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
        postsContainer.appendChild(postElement);
    });
}

// Function to load members
function loadMembers() {
    const membersList = document.getElementById('members');
    members.forEach(member => {
        const memberItem = document.createElement('li');
        memberItem.textContent = member;
        membersList.appendChild(memberItem);
    });
}

// Load posts and members when the page loads
window.onload = function () {
    loadPosts();
    loadMembers();
};
