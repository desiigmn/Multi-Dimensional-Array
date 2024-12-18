function mdArray() {
    const namesInput = prompt("Enter names (e.g., Genevieve, Juan, Luna, Gabriel, Elise)");
    const agesInput = prompt("Enter ages (e.g., 24, 65, 21, 5, 9)");
  
    const names = namesInput ? namesInput.split(",") : [];
    const ages = agesInput ? agesInput.split(",").map(Number) : [];
  
    const restructuredArray = names.map((name, index) => [name, ages[index]]);
  
    restructuredArray.forEach(item => alert(item.join(", ")));
  }
  
  mdArray();