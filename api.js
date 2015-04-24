
(function() {
	"use strict";
	
	var main = function() {
		var person = prompt("Enter a name to see if they've been arrested lately:");  
		var url = 'http://www.jailbase.com/api/1/recent/?source_id=nc-brsd&page=8&json_callback=?';
		$.getJSON(url, function(jailRecord) {
			var i =  Math.floor((Math.random() * 10) + 1);
			var $jailTable = $('<table>');
			var record = jailRecord.records;
				var $item = $('<tr>');
				var $itemProp = $('<td>').text('Name: ');
				var $itemVal = $('<td>').text(person);
				$item.append($itemProp);
				$item.append($itemVal);
				$jailTable.append($item);
	
				var $item = $('<tr>');
				var $itemProp = $('<td>').text('Alias: ');
				var $itemVal = $('<td>').text(record[i].name);
				$item.append($itemProp);
				$item.append($itemVal);
				$jailTable.append($item);
	
				var $item = $('<tr>');
				var $itemProp = $('<td>').text('Arrest date: ');
				var $itemVal = $('<td>').text(record[i].book_date_formatted);
				$item.append($itemProp);
				$item.append($itemVal);
				$jailTable.append($item);
	
				var $item = $('<tr>');
				var $itemProp = $('<td>').text('Charges: ');
				var $itemVal = $('<td>').text(record[i].charges);
				$item.append($itemProp);
				$item.append($itemVal);
				$jailTable.append($item);	
			
			$('main').append($jailTable);
			$('main').append('<p><a href=" ' + record[i].mugshot + ' ">mugshot</a></p>');

		});
	};
	
	$(document).ready(main);
}());
