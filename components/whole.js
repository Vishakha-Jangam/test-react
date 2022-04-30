function bodycode(){
    return `
    
    <div id="links">
      <div><a href="index.html">Home</a></div>
      <div><a href="contact.html">Contact List</a></div>
      <div><a href="favourites.html">Favourites</a></div>
    </div>

    <form id="form">
    <h2>Enter Your Contact Details</h2>
    <input placeholder="Enter Contact name" id="name" type="text" />
    <input placeholder="Enter Mobile Number" type="number" id="mobile" />
    <select id="type">
      <option value="">Select Type</option>
      <option value="Family">Family</option>
      <option value="Friends">Friends</option>
      <option value="Others">Others</option>
    </select>
    <input type="submit" value="Add Contact" />
  </form>
    `;
}

export default bodycode;