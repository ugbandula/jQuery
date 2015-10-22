    // Contains Victorian public holidays which date selection needs to be restricted
    var vicHolidays = [
      {
        date: '01/01/2015',
        desc: 'New Year Day'
      }, 
      {
        date: '26/01/2015',
        desc: 'Australia Day'
      },
      {
        date: '09/03/2015',
        desc: 'Labour Day'
      },
      {
        date: '03/04/2015',
        desc: 'Good Friday'
      },
      {
        date: '04/04/2015',
        desc: 'Saturday before Easter Sunday'
      },
      {
        date: '06/04/2015',
        desc: 'Easter Monday'
      },
      {
        date: '25/04/2015',
        desc: 'ANZAC Day'
      },
      {
        date: '08/06/2015',
        desc: 'Queens Birthday'
      },
      {
        date: '02/10/2015',
        desc: 'AFL Grand Final Holiday'
      },
      {
        date: '25/12/2015',
        desc: 'Christmas Day'
      },
      {
        date: '26/12/2015',
        desc: 'Boxing Day'
      },
      {
        date: '28/12/2015',
        desc: 'Boxing Day *Additional Day'
      }
      ];
    
    $(function() {
      $("#datepicker").datepicker({
        firstDay: 1,    // First day of the week
        minDate: 2,     // Start of date selection
        maxDate: '10w',  // End of date selection
        
        /**
         * A function that takes a date as a parameter and must return an array with:
         * [0]: true/false indicating whether or not this date is selectable
         * [1]: a CSS class name to add to the date's cell or "" for the default presentation
         * [2]: an optional popup tooltip for this date
         * 
         */
        beforeShowDay: function(date) {
					var result = [true, "", ""];
					result = $.datepicker.noWeekends(date);
					
					if (vicHolidays === null) {
						result[1] = "";
					} else {
					  // Format the date in the format dd/mm/yy
						var key = $.datepicker.formatDate("dd/mm/yy", date);

            // Go through the defined Victorian holidays
					  for (var i=0; i<vicHolidays.length; i++) {
              if (key == vicHolidays[i].date) {
  						  result[0] = false;
  							result[1] = "dp-highlight-holiday";
  							result[2] = vicHolidays[i].desc;
              }					     
					  }
					}
					return result;
				}
      });
    });
