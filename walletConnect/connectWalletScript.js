// Get references to the DOM elements
const connectButton = document.getElementById('connectButton');
const installMetaMaskModal = document.getElementById('installMetaMaskModal');
const closeModalButton = document.getElementById('closeModalButton');
const statusHeading = document.getElementById('status-heading');
const statusDescription = document.getElementById('status-description');
const walletInfoDiv = document.getElementById('wallet-info');
const walletAddressSpan = document.querySelector('#wallet-address span');

/**
 * The main function to handle the wallet connection.
 */
const connectWallet = async () => {
    // Check if the MetaMask extension is installed in the browser
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
        try {
            // Request account access
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            console.log('Connected account:', account);
            
            // Update the UI to show the connected state
            updateUIForConnection(account);

        } catch (error) {
            console.error('User rejected the connection request:', error);
            statusDescription.textContent = "Connection failed. Please try again.";
            statusDescription.style.color = '#f87171'; // text-red-400
        }
    } else {
        // MetaMask is not installed, show the modal
        console.log('MetaMask is not installed.');
        installMetaMaskModal.classList.remove('hidden');
    }
};

/**
 * Updates the UI elements after a successful wallet connection.
 * @param {string} account - The connected wallet address.
 */
const updateUIForConnection = (account) => {
    // Format the address to show the first 6 and last 4 characters
    const formattedAccount = `${account.substring(0, 6)}...${account.substring(account.length - 4)}`;

    // Update button and text
    connectButton.textContent = 'Connected';
    connectButton.disabled = true;

    statusHeading.textContent = 'Wallet Connected!';
    statusDescription.textContent = 'Your wallet is now successfully connected.';
    statusDescription.style.color = '#9ca3af'; // text-gray-400
    
    // Show wallet info
    walletAddressSpan.textContent = formattedAccount;
    walletInfoDiv.classList.remove('hidden');
};

// Add event listener to the connect button
connectButton.addEventListener('click', connectWallet);

// Add event listener to the close button on the modal
closeModalButton.addEventListener('click', () => {
    installMetaMaskModal.classList.add('hidden');
});

// Listen for account changes in MetaMask
if (typeof window.ethereum !== 'undefined') {
    window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length > 0) {
            console.log('Account changed to:', accounts[0]);
            updateUIForConnection(accounts[0]);
        } else {
            // Handle disconnection
            console.log('User disconnected.');
            // Reset UI to initial state
            connectButton.textContent = 'Connect Wallet';
            connectButton.disabled = false;
            statusHeading.textContent = 'Connect to MetaMask';
            statusDescription.textContent = 'Click the button below to connect your wallet.';
            walletInfoDiv.classList.add('hidden');
        }
    });
}
