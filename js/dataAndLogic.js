let tableBody = document.getElementById('table-body');
let searchInput = document.getElementById('search-input');


let tableData = [
    {
        tType: '101',
        id: 'Diesel Gen',
        tAlert: 'High Temperature',
        time: '2021-05-16 08:00:24',
        severity: 'Critical',
        status: 'online',
        action: 'shutdown'
    },
    {
        tType: '102',
        id: 'Petrol Gen',
        tAlert: 'Low Pressure',
        time: '2021-05-16 08:00:24',
        severity: 'Critical',
        status: 'online',
        action: 'shutdown'
    },
    {
        tType: '103',
        id: 'Petrol Gen',
        tAlert: 'Low fuel',
        time: '2021-05-16 08:00:24',
        severity: 'Warning',
        status: 'offline',
        action: 'restart'
    },
    {
        tType: '104',
        id: 'Diesel Gen',
        tAlert: 'Battery not charging',
        time: '2021-05-16 08:00:24',
        severity: 'Warning',
        status: 'offline',
        action: 'restart'
    },
    {
        tType: '105',
        id: 'Utility',
        tAlert: 'Disconnected',
        time: '2021-05-16 08:00:24',
        severity: 'Warning',
        status: 'offline',
        action: 'restart'
    },
    {
        tType: '106',
        id: 'Petrol Gen',
        tAlert: 'Low oil pressure',
        time: '2021-05-16 08:00:24',
        severity: 'Critical',
        status: 'offline',
        action: 'maintenance'
    }
];

function renderUI() {
    tableBody.innerHTML = '';
    for(let i = 0; i < tableData.length; i++) {
        tableBody.innerHTML += `
        <tr>
                            <td>${tableData[i].tType}</td>
                            <td>${tableData[i].id}</td>
                            <td>${tableData[i].tAlert}</td>
                            <td>${tableData[i].time}</td>
                            <td><div class="critical-box">
                              <div class="${tableData[i].severity.toLocaleLowerCase()} var-box">
                                ${tableData[i].severity}
                              </div>
                            </div>
                            <td><div class="critical-box">
                              <div class="${tableData[i].status.toLocaleLowerCase()} status var-box">
                                ${tableData[i].status}
                              </div>
                            </div></td>
                            <td class="pointer shutdown1" style="cursor: pointer;" onclick="changeStatus('${tableData[i].tType}')">${tableData[i].action}</td>
                            <td class="dot-box d-flex align-items-center py-3">
                              <div class="clicking"></div>
                              <div class="clicking"></div>
                              <div class="clicking"></div>
                            </td>
                          </tr>
        `
    }
}



function changeStatus(tType) {
    for(let i = 0; i < tableData.length; i++) {
        if(tableData[i].tType == tType) {
            if(tableData[i].action == 'shutdown') {
                tableData[i].status = 'offline';
                tableData[i].action = 'restart';
                renderUI();
            } else if (tableData[i].action == 'restart') {
                tableData[i].status = 'online';
                tableData[i].action = 'shutdown';
                renderUI();

            } else {
                alert('Can\'t be started, it\'s under maintenance');
            }
        }
    }
}

function searchResult() {
    console.log('Called');
    if((searchInput.value).length == 0) {
        renderUI();
    } else {
        tableBody.innerHTML = '';
        for(let i = 0; i < tableData.length; i++) {
            if(tableData[i].id.toLocaleLowerCase().includes(searchInput.value.toLocaleLowerCase())) {
                tableBody.innerHTML += `
        <tr>
                            <td>${tableData[i].tType}</td>
                            <td>${tableData[i].id}</td>
                            <td>${tableData[i].tAlert}</td>
                            <td>${tableData[i].time}</td>
                            <td><div class="critical-box">
                              <div class="${tableData[i].severity.toLocaleLowerCase()} var-box">
                                ${tableData[i].severity}
                              </div>
                            </div>
                            <td><div class="critical-box">
                              <div class="${tableData[i].status.toLocaleLowerCase()} status var-box">
                                ${tableData[i].status}
                              </div>
                            </div></td>
                            <td class="pointer shutdown1" style="cursor: pointer;" onclick="changeStatus('${tableData[i].tType}')">${tableData[i].action}</td>
                            <td class="dot-box d-flex align-items-center py-3">
                              <div class="clicking"></div>
                              <div class="clicking"></div>
                              <div class="clicking"></div>
                            </td>
                          </tr>
                          `
            }
        }
    }
}
