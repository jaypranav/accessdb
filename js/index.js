/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function readytologin(e)
{
	alert("YO");
	e.preventDefault();
};

function register11(e)
{
	alert("FIRST NAME:  + fname"); 
	//var fname = document.getElementById('fname').textContent;
		 
};

jQuery( document ).ready( function($) {
	
	$("#register-btn").click(function() {
		 var datastring = $("#register").serialize();
		var register_url = "http://imajineweb.com/temple/insert_user.php";
		 // var register_url = "insert_user.php";
		 alert("first");
		 $.ajax({
			// url: 'http://www.imajineweb.com/temple/insert_user.php',
			 url: register_url,
			 data: datastring, // Convert a form to a JSON string representation
			 type: 'post', 
			 async: true,
			 
			 beforeSend: function() {
				 alert("SECOND");
				 // This callback function will trigger before data is sent
				// $.mobile.showPageLoadingMsg(true); // This will show ajax spinner
				 },
				 complete: function() {
					 alert("FINAL");
					 // This callback function will trigger on data sent/received complete
				//	 $.mobile.hidePageLoadingMsg(); // This will hide ajax spinner
					 },
					 success: function (result) {
						 alert("FDONE");
                           /* resultObject.formSubmitionResult = result;
                                        $.mobile.changePage("#second"); */
                    },
                    error: function (request,error) {
                        // This callback function will trigger on unsuccessful action                
                        alert('Network error has occurred please try again!');
                    }
					
                });   
				 alert(datastring);                
               
            return false; // cancel original event to prevent form submitting
		/* 
		 $.ajax({
			type       : "POST",
			url        : register_url,
			crossDomain: true,
			beforeSend : function() {$.mobile.loading('show')},
			complete   : function() {$.mobile.loading('hide')},
			// data       : {username : 'subin', password : 'passwordx'},
			 data       : datastring,
			dataType   : 'json',
			success    : function(response) {
				//console.error(JSON.stringify(response));
				alert('Works!');
				},
    		error      : function() {
				
       		// console.error("error");
			alert('Now working!');                  
    }
});  */
		
		
	});
		
	
	
	
	
	
	});