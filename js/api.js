const urlTable = "http://localhost:3000/tables";
const urlFoods  = "http://localhost:3000/foods";

async function getData(url) {
    try {
      let response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      let data = await response.json();
      return data;
    } catch (error) {
      console.error('Lỗi:', error);
    }
  }

  function edit(url,order) {
    fetch(`${url}/${order.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Đơn hàng đã được cập nhật', data);
      })
      .catch(error => console.error('Lỗi khi cập nhật đơn hàng', error));
}