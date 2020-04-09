$('#joinNowBtn').click((e) => {
  $('#joinNowForm').submit();
});

$('#contactUsBtn').click((e) => {
  $('#contactUsForm').submit();
});

$('#shareFormBtn').click((e) => {
  $('#shareForm').submit();
});

$('#joinNowForm').submit((e) => {
  e.preventDefault();

  let name = $('#joinNowForm input#name').val();
  if (name == '') {
    $('#joinNowForm label#name_error').show();
    $('#joinNowForm input#name').focus();
  }else{
    if (name.value != ''){
      $('#joinNowForm label#name_error').hide();
    } 
  }

  let email = $('#joinNowForm input#email').val();
  if (email == '') {
    $('#joinNowForm label#email_error').show();
    $('#joinNowForm input#email').focus();
  }else{
    if (email.value != ''){
      $('#joinNowForm label#email_error').hide();
    } 
  }

  let phone = $('#joinNowForm input#phnNo').val();
  if (phone == '') {
    $('#joinNowForm label#phnRequired_error').show();
    $('#joinNowForm input#phnNo').focus();
  }else{
    if (isNaN(phone.value) ){
      $('#joinNowForm label#phnRequired_error').hide();
      $('#joinNowForm label#phn_error').show();
    }
    else{
      if (phone.value.length < 11 || phone.value.length > 11 ){
        $('#joinNowForm label#phn_error').hide();
        $('#joinNowForm label#phnNo_error').show();
      }
      $('#joinNowForm label#phnNo_error').hide();
    }
  }

  let sector = $('#joinNowForm select#sector').val();

  if (sector == 'Select') {
    $('#joinNowForm label#sector_error').show();
    $('#joinNowForm select#sector').focus();
  }else{
    if (sector.value != 'Select'){
      $('#joinNowForm label#sector_error').hide();
    } 
  }

  if (name != null && email != null && phone != null && sector != 'Select') {
    const data = new FormData();
    data.append('name', name.value);
    data.append('email', email.value);
    data.append('phone', phone.value);
    data.append('sector', sector.value);

    alert(FormData);
    // make post request to server

    console.log(data);
  }
});

$('#contactUsForm').submit((e) => {
  e.preventDefault();

  let name = $('#contactUsForm input#name').val();
  if (name == '') {
    $('#contactUsForm label#name_error').show();
    $('#contactUsForm input#name').focus();
  }

  let email = $('#contactUsForm input#email').val();
  if (email == '') {
    $('#contactUsForm label#email_error').show();
    $('#contactUsForm input#email').focus();
  }

  let phone = $('#contactUsForm input#phnNo').val();
  if (phone == '') {
    $('#contactUsForm label#phn_error').show();
    $('#contactUsForm input#phnNo').focus();
  }

  let message = $('#contactUsForm textarea').val();
  if (message == '') {
    $('#contactUsForm label#message_error').show();
    $('#contactUsForm textarea').focus();
  }

  if (name && email && phone && message ) {
    const data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('phone', phone);
    data.append('message', message);

    // make post request to server

    console.log(data);
  }
});

$('#shareForm').submit((e) => {
  e.preventDefault();

  let name = $('#shareForm input#name').val();
  if (name == '') {
    $('#shareForm label#name_error').show();
    $('#shareForm input#name').focus();
  }

  let org = $('#shareForm input#org').val();

  let photo = $('#shareForm input#photo')[0].files[0];

  let message = $('#shareForm textarea').val();
  if (message == '') {
    $('#shareForm label#message_error').show();
    $('#shareForm textarea').focus();
  }

  if (name && message) {
    const data = new FormData();
    data.append('name', name);
    data.append('message', message);

    if (org)
      data.append('org', org);
    if (photo)
      data.append('photo', photo);

    console.log(data);
  }
});
