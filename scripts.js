const JSONManipulator = require('./JSONManipulator');
const manipulator = new JSONManipulator("qwe");


// console.log(manipulator.read("./data/untrasted/123.json").object_area);

// manipulator.change_field_by(-2,"123",["1:1", "2:1"]);
const q = manipulator.return_all_untrasted_id();
// console.log(manipulator.read("./data/untrasted/123.json"));
console.log(q);
// manipulator.create_json(123, "boat", [2,1]);
delete manipulator;


