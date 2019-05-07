export function DeleteDefect(defectId) {
  if (window.confirm("Are you sure want to delete?")) {
    console.log(defectId);
    var url = `http://localhost:8080/DefectTracker/defect/deleteDefect/${defectId}`;

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
