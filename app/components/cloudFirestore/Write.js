import firebase from "firebase/app";
import "firebase/firestore";

const WriteToCloudFirestore = () => {
  const sendData = () => {
    try {
      firebase
        .firestore()
        .collection("myCollection")
        .doc("my_document")
        .set({
          string_data: "Slamet Raharjo",
          number_data: 2,
          boolean_data: false,
          map_data: { stringInMap: "Hi", numberInMap: 7 },
          array_data: ["text, 4"],
          null_data: null,
          time_stamp: firebase.firestore.Timestamp.fromDate(
            new Date("September 06, 1998 03:24:00")
          ),
          geo_point: new firebase.firestore.GeoPoint(34.714322, -131.468435),
        })
        .then(alert("Data Was Succesfully sent to cloud Firestore"));
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <>
      <button onClick={sendData}>Send Data To Firestore</button>
    </>
  );
};

export default WriteToCloudFirestore;
