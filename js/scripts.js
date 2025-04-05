// Mock data for IPOs and Users
const ipoData = [
    {
      id: 1,
      company_name: "TechCorp",
      price_band: "₹120 - ₹150",
      open: "2025-04-01",
      close: "2025-04-05",
      status: 1 // Upcoming
    },
    {
      id: 2,
      company_name: "FinServe",
      price_band: "₹200 - ₹250",
      open: "2025-03-15",
      close: "2025-03-20",
      status: 2 // Ongoing
    },
    {
      id: 3,
      company_name: "HealthPlus",
      price_band: "₹180 - ₹220",
      open: "2025-02-01",
      close: "2025-02-05",
      status: 3 // Closed
    }
  ];
  
  const userData = [
    {
      id: 1,
      username: "admin",
      email: "admin@bluestock.in",
      role: "admin"
    },
    {
      id: 2,
      username: "john_doe",
      email: "john.doe@example.com",
      role: "user"
    },
    {
      id: 3,
      username: "jane_smith",
      email: "jane.smith@example.com",
      role: "user"
    }
  ];
  
  // Function to load data for all pages
  document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    const page = path.split('/').pop();
  
    // Function to get status text for IPOs
    const getStatusText = (status) => {
      switch (status) {
        case 1: return 'Upcoming';
        case 2: return 'Ongoing';
        case 3: return 'Closed';
        default: return 'Unknown';
      }
    };
  
    if (page === 'dashboard.html') {
      // Dashboard page logic
      setTimeout(() => {
        const dashboardData = {
          totalIPOs: ipoData.length,
          ipoInGain: ipoData.filter(ipo => ipo.status === 3).length, // Mocking gain for closed IPOs
          ipoInLoss: 0, // Mocking no loss for simplicity
          upcomingIPOs: ipoData.filter(ipo => ipo.status === 1).length,
          newListedIPOs: ipoData.filter(ipo => ipo.status === 3).length,
          ongoingIPOs: ipoData.filter(ipo => ipo.status === 2).length
        };
  
        document.getElementById('total-ipos').textContent = dashboardData.totalIPOs;
        document.getElementById('ipo-gain').textContent = dashboardData.ipoInGain;
        document.getElementById('ipo-loss').textContent = dashboardData.ipoInLoss;
        document.getElementById('upcoming-ipos').textContent = dashboardData.upcomingIPOs;
        document.getElementById('new-listed-ipos').textContent = dashboardData.newListedIPOs;
        document.getElementById('ongoing-ipos').textContent = dashboardData.ongoingIPOs;
      }, 1000);
    } else if (page === 'ipo_management.html') {
      // IPO Management page logic
      const ipoTable = document.getElementById('ipo-table');
      
      // Populate the IPO table
      ipoData.forEach(ipo => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${ipo.company_name}</td>
          <td>${ipo.price_band}</td>
          <td>${ipo.open}</td>
          <td>${ipo.close}</td>
          <td>${getStatusText(ipo.status)}</td>
          <td>
            <button class="btn action-btn edit me-2" onclick="editIPO(${ipo.id})">
              <i class="fas fa-edit"></i>
            </button>
            <button class="btn action-btn delete" onclick="deleteIPO(${ipo.id})">
              <i class="fas fa-trash"></i>
            </button>
          </td>
        `;
        ipoTable.appendChild(row);
      });
    } else if (page === 'user_management.html') {
      // User Management page logic
      const userTable = document.getElementById('user-table');
  
      // Populate the User table
      userData.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${user.username}</td>
          <td>${user.email}</td>
          <td>${user.role}</td>
          <td>
            <button class="btn action-btn edit me-2" onclick="editUser(${user.id})">
              <i class="fas fa-edit"></i>
            </button>
            <button class="btn action-btn delete" onclick="deleteUser(${user.id})">
              <i class="fas fa-trash"></i>
            </button>
          </td>
        `;
        userTable.appendChild(row);
      });
    }
  });
  
  // Function to add a new IPO
  function addIPO() {
    const companyName = document.getElementById('companyName').value;
    const priceBand = document.getElementById('priceBand').value;
    const openDate = document.getElementById('openDate').value;
    const closeDate = document.getElementById('closeDate').value;
    const status = parseInt(document.getElementById('status').value);
  
    // Mock adding to the table (in a real app, this would be an API call)
    const newIPO = {
      id: ipoData.length + 1,
      company_name: companyName,
      price_band: priceBand,
      open: openDate,
      close: closeDate,
      status: status
    };
    ipoData.push(newIPO);
  
    const ipoTable = document.getElementById('ipo-table');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${newIPO.company_name}</td>
      <td>${newIPO.price_band}</td>
      <td>${newIPO.open}</td>
      <td>${newIPO.close}</td>
      <td>${newIPO.status === 1 ? 'Upcoming' : newIPO.status === 2 ? 'Ongoing' : 'Closed'}</td>
      <td>
        <button class="btn action-btn edit me-2" onclick="editIPO(${newIPO.id})">
          <i class="fas fa-edit"></i>
        </button>
        <button class="btn action-btn delete" onclick="deleteIPO(${newIPO.id})">
          <i class="fas fa-trash"></i>
        </button>
      </td>
    `;
    ipoTable.appendChild(newRow);
  
    // Close the modal and reset the form
    const modal = bootstrap.Modal.getInstance(document.getElementById('addIPOModal'));
    modal.hide();
    document.getElementById('addIPOForm').reset();
  }
  
  // Function to edit an IPO (placeholder)
  function editIPO(id) {
    alert(`Edit IPO with ID: ${id}`);
    // In a real app, this would open a modal with the IPO data pre-filled for editing
  }
  
  // Function to delete an IPO
  function deleteIPO(id) {
    if (confirm(`Are you sure you want to delete IPO with ID: ${id}?`)) {
      const index = ipoData.findIndex(ipo => ipo.id === id);
      if (index !== -1) {
        ipoData.splice(index, 1);
        const ipoTable = document.getElementById('ipo-table');
        ipoTable.innerHTML = '';
        ipoData.forEach(ipo => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${ipo.company_name}</td>
            <td>${ipo.price_band}</td>
            <td>${ipo.open}</td>
            <td>${ipo.close}</td>
            <td>${ipo.status === 1 ? 'Upcoming' : ipo.status === 2 ? 'Ongoing' : 'Closed'}</td>
            <td>
              <button class="btn action-btn edit me-2" onclick="editIPO(${ipo.id})">
                <i class="fas fa-edit"></i>
              </button>
              <button class="btn action-btn delete" onclick="deleteIPO(${ipo.id})">
                <i class="fas fa-trash"></i>
              </button>
            </td>
          `;
          ipoTable.appendChild(row);
        });
      }
    }
  }
  
  // Function to add a new user
  function addUser() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const role = document.getElementById('role').value;
  
    // Mock adding to the table (in a real app, this would be an API call)
    const newUser = {
      id: userData.length + 1,
      username: username,
      email: email,
      role: role
    };
    userData.push(newUser);
  
    const userTable = document.getElementById('user-table');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${newUser.username}</td>
      <td>${newUser.email}</td>
      <td>${newUser.role}</td>
      <td>
        <button class="btn action-btn edit me-2" onclick="editUser(${newUser.id})">
          <i class="fas fa-edit"></i>
        </button>
        <button class="btn action-btn delete" onclick="deleteUser(${newUser.id})">
          <i class="fas fa-trash"></i>
        </button>
      </td>
    `;
    userTable.appendChild(newRow);
  
    // Close the modal and reset the form
    const modal = bootstrap.Modal.getInstance(document.getElementById('addUserModal'));
    modal.hide();
    document.getElementById('addUserForm').reset();
  }
  
  // Function to edit a user (placeholder)
  function editUser(id) {
    alert(`Edit User with ID: ${id}`);
    // In a real app, this would open a modal with the user data pre-filled for editing
  }
  
  // Function to delete a user
  function deleteUser(id) {
    if (confirm(`Are you sure you want to delete User with ID: ${id}?`)) {
      const index = userData.findIndex(user => user.id === id);
      if (index !== -1) {
        userData.splice(index, 1);
        const userTable = document.getElementById('user-table');
        userTable.innerHTML = '';
        userData.forEach(user => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td>
              <button class="btn action-btn edit me-2" onclick="editUser(${user.id})">
                <i class="fas fa-edit"></i>
              </button>
              <button class="btn action-btn delete" onclick="deleteUser(${user.id})">
                <i class="fas fa-trash"></i>
              </button>
            </td>
          `;
          userTable.appendChild(row);
        });
      }
    }
  }