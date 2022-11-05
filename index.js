const districtSelect = document.getElementById("district");

const district = ['Ampara','Anuradhapura','Budulla','Batticoloa','Colombo',
'Galle','Gampaha','Hambanthota','Jaffna','Kalutara','Kandy','Kegalle',
'Kilinochchi','Kurunagala','Mannar','Matale','Matara','Monaragala',
'Mullaitivu','Nuwara Eliya','Polonnaruwa','Puttalam','Ratnapura','Trincomalee',
'Vavuniya'];

(function populateDistrict (){
    for(let i=0; i<district.length; i++){
        const option = document.createElement('option');
        option.textContent = district[i];
        districtSelect.appendChild(option);
    }
    districtSelect.value = 'Ampara';
})();