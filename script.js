document.addEventListener('DOMContentLoaded', () => {
    const fetchData = (url) => {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => resolve(data))
                .catch(error => reject(error));
        });
    };
    const displayData = (elementId, data) => {
        const element = document.getElementById(elementId);
        element.innerHTML = JSON.stringify(data, null, 2);
    };
    const apiUrl1 = 'https://api.example.com/data1';
    const apiUrl2 = 'https://api.example.com/data2';
    const apiUrl3 = 'https://api.example.com/data3';

    fetchData(apiUrl1)
        .then(data => displayData('apiData1', data))
        .catch(error => console.error('Error fetching data from API 1:', error));

    fetchData(apiUrl2)
        .then(data => displayData('apiData2', data))
        .catch(error => console.error('Error fetching data from API 2:', error));

    fetchData(apiUrl3)
        .then(data => displayData('apiData3', data))
        .catch(error => console.error('Error fetching data from API 3:', error));
});
