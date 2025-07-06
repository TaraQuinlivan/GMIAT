define(['pipAPI', 'https://taraquinlivan.github.io/GMIAT/fullbiat.js'], function(APIConstructor, iatExtension){
 var API = new APIConstructor();

	
	return iatExtension({
		practiceCategory1 : 
			{
				name : 'Good_Mother', //Will appear in the data.
				title : {
					media : {word : 'Good Mother'}, //Name of the category presented in the task.
					css : {color:'#000000','font-size':'1.8em'}, //Style of the category title.
					height : 4, //Height (because we need to know where to put the next item in the title)
					startStimulus : { 
					//If you're using a startStimulus, set here. If not, set the parameter showStimuliWithInst to false (see later below)
						media : {word : 'Happy, Attentive, Calm, Responsible'}, 
						css : {color:'#000000','font-size':'1em'}, 
						height : 2
					}
				}, 
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word : 'Happy'}, 
					{word : 'Attentive'}, 
					{word : 'Calm'}, 
					{word : 'Responsible'}
				], 
				//Stimulus css (style of the stimuli)
				stimulusCss : {color:'#000000','font-size':'2em'}
			},	
			practiceCategory2 : 
			{
				name : 'Bad_Mother', 
				title : {
					media : {word : 'Bad Mother'}, 
					css : {color:'#000000','font-size':'1.8em'}, 
					height : 4,
					startStimulus : {
						media : {word : 'Unsatisfied, Overwhelmed, Tired, Self-focused'}, 
						css : {color:'#000000','font-size':'1em'}, 
						height : 2
					}
				}, 
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word : 'Unsatisfied'}, 
					{word : 'Overwhelmed'}, 
					{word : 'Tired'}, 
					{word : 'Self-focused'}
				], 
				//Stimulus css
				stimulusCss : {color:'#000000','font-size':'2em'}
			},
			categories : [  //As many categories you need.
				{
					name : 'Self', //Will appear in the data.
					title : {
						media : {word : 'Self'}, //Name of the category presented in the task.
						css : {color:'#000000','font-size':'1.8em'}, //Style of the category title.
						height : 4, //Height (because we need to know where to put the next item in the title)
						startStimulus : { 
						//If you're using a startStimulus, set here. If not, set the parameter showStimuliWithInst to false (see later below)
						media : {image : 'dut1thin.jpg'}, 
							css : {color:'#000000','font-size':'1em'}, 
							height : 13
						}
					}, 
					stimulusMedia : [ //Stimuli content as PIP's media objects
					{image : 'dut1.jpg'}, 
        			{image : 'dut2.jpg'}, 
        			{image : 'dut3.jpg'}, 
        			{image : 'dut4.jpg'}, 
        			{image : 'dut5.jpg'}, 
        			{image : 'dut6.jpg'}
					], 
					//Stimulus css (style of the stimuli)
					stimulusCss : {color:'#000000','font-size':'2em'}
				},	
				{
					name : 'Anthony Albanese', 
					title : {
						media : {word : 'Anthony Albanese'}, 
						css : {color:'#000000','font-size':'1.8em'}, 
						height : 4,
						startStimulus : {
							media : {image : 'alb1thin.jpg'},  
							css : {color:'#000000','font-size':'1em'}, 
							height : 13
						}
					}, 
					stimulusMedia : [ //Stimuli content as PIP's media objects
					{image : 'alb1.jpg'}, 
        			{image : 'alb2.jpg'}, 
        			{image : 'alb3.jpg'}, 
        			{image : 'alb4.jpg'}, 
        			{image : 'alb5.jpg'}, 
        			{image : 'alb6.jpg'}
					], 
					//Stimulus css
					stimulusCss : {color:'#000000','font-size':'2em'}
				}
			],
			base_url : {//Where are your images at?
			image : 'https://floydy10.github.io/qualtrics-custom-script/images/'
				
			} 
	});
});



