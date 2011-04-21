#include "styles_editor.jsx";

function setupDoc() {
	//create a new Document
	var pH = "180mm";
	var pW =  "120";
	var theBleed = "3mm";
	var theMarginLeft = "15mm";
	var theMarginTop = "20.817mm";
	var theMarginRight = "22mm";
	var theMarginBottom = "34.588mm";
	var theColumnCount = 1;
	var theColumnGutter = "4mm";


	var doc = app.documents.add()
	with (doc.documentPreferences) {
		pageWidth = pW;
		pageHeight = pH;
		facingPages = true;
		//BleedBox settings
		documentBleedBottomOffset = "3mm";
		documentBleedTopOffset = "3mm";
		documentBleedInsideOrLeftOffset = "3mm";
		documentBleedOutsideOrRightOffset = "3mm";
	}
		with (doc.viewPreferences) {
		pageWidth = pW;
		pageHeight = pH;
		horizontalMeasurementUnits = MeasurementUnits.MILLIMETERS;
		verticalMeasurementUnits = MeasurementUnits.MILLIMETERS;
		rulerOrigin = RulerOrigin.pageOrigin;
		
	}
		with (doc.gridPreferences) {
			//setup the masterGrid
			baselineDivision = "11.936pt";
			baselineStart = 23.3;
			baselineGridShown = true;
		}
		
		
		buildStyles(doc);
		var fnOpt = doc.footnoteOptions;
		fnOpt.footnoteTextStyle = doc.paragraphStyles.item("footnote");
		fnOpt.footnoteMarkerStyle = doc.characterStyles.item("footnote_inText");
		fnOpt.markerPositioning = FootnoteMarkerPositioning.NORMAL_MARKER;
		
		//setup margins and columns for the first masterpage
		var ms1 = doc.masterSpreads.item(0)
		with(ms1.pages.item(0).marginPreferences){
				left = theMarginLeft;
				top = theMarginTop;
				right = theMarginRight;
				bottom = theMarginBottom;
				columnCount = theColumnCount;
				columnGutter = theColumnGutter;
		}
		
		var w = doc.documentPreferences.pageWidth;
		var h = doc.documentPreferences.pageHeight;
		var y1 = h - ms1.pages.item(0).marginPreferences.bottom + 5;
		var x1 = ms1.pages.item(0).marginPreferences.right;
		var y2 = y1 + doc.gridPreferences.baselineDivision;
		var x2 = w - ms1.pages.item(0).marginPreferences.left;

		var paginaLeft = ms1.pages.item(0).textFrames.add({geometricBounds:[y1,x1,y2,x2]})
    	with (paginaLeft.parentStory.insertionPoints.item(0)) {
                contents = SpecialCharacters.sectionMarker;
                contents = SpecialCharacters.emSpace;
                contents = SpecialCharacters.autoPageNumber;
        }	
		paginaLeft.paragraphs.everyItem().appliedParagraphStyle = doc.paragraphStyles.item("pagina_Left");

		var ms1right = ms1.pages.item(1)
		with(ms1right.marginPreferences){
			left = theMarginLeft;
			top = theMarginTop;
			right = theMarginRight;
			bottom = theMarginBottom;
			columnCount = theColumnCount;
			columnGutter = theColumnGutter;
		}
		 y1 = h - ms1.pages.item(0).marginPreferences.bottom + 5;
		 x1 = ms1.pages.item(0).marginPreferences.left;
		 y2 = y1 + doc.gridPreferences.baselineDivision;
		 x2 = w - ms1.pages.item(0).marginPreferences.right;
		
		var paginaRight = ms1.pages.item(1).textFrames.add({geometricBounds:[y1,x1,y2,x2]})
    	with (paginaRight.parentStory.insertionPoints.item(0)) {
                contents = SpecialCharacters.sectionMarker;
                contents = SpecialCharacters.emSpace;
                contents = SpecialCharacters.autoPageNumber;
        }
		paginaRight.paragraphs.everyItem().appliedParagraphStyle = doc.paragraphStyles.item("pagina_Right");

		var ms2 = doc.masterSpreads.add()//doc.masterSpreads.item(1);
				with(ms2.pages.item(0).marginPreferences){
					left = theMarginLeft;
					top = theMarginTop;
					right = theMarginRight;
					bottom = theMarginBottom;
					columnCount = theColumnCount;
					columnGutter = theColumnGutter;
				}
				with(ms2.pages.item(1).marginPreferences){
					left = theMarginLeft;
					top = theMarginTop;
					right = theMarginRight;
					bottom = theMarginBottom;
					columnCount = theColumnCount;
					columnGutter = theColumnGutter;
		
				}
			return doc;

		}
		
// this is the same exept it is A4
		function setup_BASIC_Doc() {
			//create a new Document
			var pH = "297mm";
			var pW =  "210";
			var theBleed = "3mm";
			var theMarginLeft = "30mm";
			var theMarginTop = "25mm";
			var theMarginRight = "25mm";
			var theMarginBottom = "25mm";
			var theColumnCount = 3;
			var theColumnGutter = "4mm";


			var doc = app.documents.add()
			with (doc.documentPreferences) {
				pageWidth = pW;
				pageHeight = pH;
				facingPages = true;
				//BleedBox settings
				documentBleedBottomOffset = theBleed;
				documentBleedTopOffset = theBleed;
				documentBleedInsideOrLeftOffset = theBleed;
				documentBleedOutsideOrRightOffset = theBleed;
			}
				with (doc.viewPreferences) {
				pageWidth = pW;
				pageHeight = pH;
				horizontalMeasurementUnits = MeasurementUnits.MILLIMETERS;
				verticalMeasurementUnits = MeasurementUnits.MILLIMETERS;
				rulerOrigin = RulerOrigin.pageOrigin;

			}
				with (doc.gridPreferences) {
					//setup the masterGrid
					baselineDivision = "19.5pt";
					baselineStart = theMarginTop;
					baselineGridShown = true;
				}


				buildStyles(doc);


				//setup margins and columns for the first masterpage
				var ms1 = doc.masterSpreads.item(0)
				with(ms1.pages.item(0).marginPreferences){
						left = theMarginLeft;
						top = theMarginTop;
						right = theMarginRight;
						bottom = theMarginBottom;
						columnCount = theColumnCount;
						columnGutter = theColumnGutter;
				}

				var w = doc.documentPreferences.pageWidth;
				var h = doc.documentPreferences.pageHeight;
				var y1 = h - ms1.pages.item(0).marginPreferences.bottom +7.88;
				var x1 = ms1.pages.item(0).marginPreferences.right;
				var y2 = y1 + doc.gridPreferences.baselineDivision;
				var x2 = w - ms1.pages.item(0).marginPreferences.left;

				var paginaLeft = ms1.pages.item(0).textFrames.add({geometricBounds:[y1,x1,y2,x2]})
		    	with (paginaLeft.parentStory.insertionPoints.item(0)) {
		                contents = SpecialCharacters.sectionMarker;
		                contents = SpecialCharacters.emSpace;
		                contents = SpecialCharacters.autoPageNumber;
		        }	
				paginaLeft.paragraphs.everyItem().appliedParagraphStyle = doc.paragraphStyles.item("pagina_Left");

				var ms1right = ms1.pages.item(1)
				with(ms1right.marginPreferences){
					left = theMarginLeft;
					top = theMarginTop;
					right = theMarginRight;
					bottom = theMarginBottom;
					columnCount = theColumnCount;
					columnGutter = theColumnGutter;
				}
				 y1 = h - ms1.pages.item(0).marginPreferences.bottom + 7.88;
				 x1 = ms1.pages.item(0).marginPreferences.left;
				 y2 = y1 + doc.gridPreferences.baselineDivision;
				 x2 = w - ms1.pages.item(0).marginPreferences.right;

				var paginaRight = ms1.pages.item(1).textFrames.add({geometricBounds:[y1,x1,y2,x2]})
		    	with (paginaRight.parentStory.insertionPoints.item(0)) {
		                contents = SpecialCharacters.sectionMarker;
		                contents = SpecialCharacters.emSpace;
		                contents = SpecialCharacters.autoPageNumber;
		        }
				paginaRight.paragraphs.everyItem().appliedParagraphStyle = doc.paragraphStyles.item("pagina_Right");

				var ms2 = doc.masterSpreads.add()//doc.masterSpreads.item(1);
						with(ms2.pages.item(0).marginPreferences){
							left = theMarginLeft;
							top = theMarginTop;
							right = theMarginRight;
							bottom = theMarginBottom;
							columnCount = theColumnCount;
							columnGutter = theColumnGutter;
						}
						with(ms2.pages.item(1).marginPreferences){
							left = theMarginLeft;
							top = theMarginTop;
							right = theMarginRight;
							bottom = theMarginBottom;
							columnCount = theColumnCount;
							columnGutter = theColumnGutter;

						}
					return doc;

				}
