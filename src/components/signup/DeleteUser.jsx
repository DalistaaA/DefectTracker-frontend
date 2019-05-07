export function DeleteUser(userId) {
  if (window.confirm("Are you sure want to delete?")) {
    console.log(userId);
    var url = `http://localhost:8080/DefectTracker/user/deleteUser/${userId}`;

    return fetch(url, {
      method: "DELETE",
      // body: JSON.stringify(items),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        return res;
      })
      .catch(err => err);
  }
}
