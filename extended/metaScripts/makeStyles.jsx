/**
 * This is set of JavaScripts for InDesign CS4 / CS5
 * written for the FFF (Verlag für Form Forschung).
 * All code is under CC licensehttp://creativecommons.org/licenses/by/3.0/
 * the function main() is in wordPressImport....js
 * the package includes also these following files:
 * vFFF_findChange_v0_01.js
 * vFFF_makeCharStyles_v0_02.js
 * vFFF_makeColors_v0_01.js
 * vFFF_makeParStyles_v0_02.js
 * vFFF_SetupDoc_v0_01.js
 *\/metaScripts\/glue code.jsx
 *\/xml\/wordpress_Example.xml
 * @author fabiantheblind
 */
//app.scriptPreferences.version = 6 ;
// this script module is written to replace the makeCharStyles and makeParStyles
// with a more html like name for the styles (h1 h2 h3 and so on)
// the styles will have just a basic styling. so you can tweak around later
function makeStyles(areStyled,myDocument,myFontReg, myFontItal ,myFontBold,myFontSemiBold, myFontSemiBoldItal){
	
makeParStyles(areStyled,myDocument,myFontReg, myFontItal, myFontSemiBold);
 makeCharStyles(areStyled,myDocument,myFontReg,myFontBold, myFontItal, myFontSemiBold, myFontSemiBoldItal) ;
}

function makeParStyles(areStyled,myDocument,myFontReg, myFontItal, myFontSemiBold) {
	 	var myName;
		var h1,h2,h3, body ,Inhaltsverzeichnis ,quote ,Autorennamen ,Fussnoten, Pagina, Bildunterschriften, Impressum;
		var myFillColor = myDocument.swatches.item("Black"); // Schwarz/Black
		var myStrokeColor =  myDocument.swatches.item("None");
		var thePointSize = 12;
		// use this for proportinal scaling of the fonts
		// makes it easier to control
		var thePointSizeFactorlow = 0.9;
		var thePointSizeFactorHigh = 1.2;
			try{
		    	body = myDocument.paragraphStyles.item("body");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	myName = body.name;
		    }
		    catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	body = myDocument.paragraphStyles.add({name:"body"})
			with(body){
					if(areStyled==true){
					
				pointSize = thePointSize;
				leading = 11.9;
				tracking = 0;
				appliedFont = myFontReg;
				kerningMethod : "Metrics";
				tracking  = 0; //The amount by which to loosen or tighten a block of text, specified in thousands of an em.
				capitalization = Capitalization.NORMAL;
				position = Position.NORMAL; // The text position relative to the baseline.
				Underline = false;
				strikeThru = false;
				ligatures =  true;
				noBreak =  false;
				
				appliedLanguage : "English: UK";

				alignToBaseline = true;
				gridAlignFirstLineOnly = false;			
				justification = Justification.LEFT_JUSTIFIED;
				balanceRaggedLines  = false;
				
				firstLineIndent = "3mm";
				
				hyphenation = true;
				hyphenateWordsLongerThan = 5;
				hyphenateAfterFirst = 2;
				hyphenateBeforeLast = 2;
				hyphenateLadderLimit = 3;
				hyphenationZone  = "12.7mm";
				hyphenWeight  = 5;
				hyphenateCapitalizedWords = true;
				hyphenateLastWord = true;

				maximumWordSpacing  = 110; // (Range: 0 to 1000)
				minimumWordSpacing  =  80; // (Range: 0 to 1000)
				desiredWordSpacing  = 100; // (Range: 0 to 1000)
		
				maximumLetterSpacing  = 0; // (Range: -100 to 500) 
				minimumLetterSpacing  =  0; //(Range: -100 to 500) 
				desiredLetterSpacing  = 0; //(Range: -100 to 500) 

				maximumGlyphScaling  = 100; // (Range: 50 to 200)
				minimumGlyphScaling  =  100; //(Range: 50 to 200)
				desiredGlyphScaling  = 100; //(Range: 50 to 200)
		
				autoLeading =  120;// (Range: 0 to 500)
		
				singleWordJustification  = SingleWordJustification.FULLY_JUSTIFIED;
				composer: "Adobe-Absatzsetzer";
				
				dropCapCharacters = 0;// (range: 0 - 150) The number of characters to drop cap.
				dropCapLines = 0; // (range: 0 - 25) The number of lines to drop cap.
//				dropCapStyle = myDocument.charcterStyles.item(0);
//				nestedStyles = 0; // A collection of nested styles

				fillColor = myFillColor; // Schwarz/Black
				fillTint  = 100; 
				overprintFill = false;
				strokeWeight = "1pt";
				strokeColor =  myStrokeColor;
				strokeTint = 100;
				overprintStroke  = false;
				
				underline = false;
				strikeThru = false;

				
			}
				}
		    }
		
		
			try{
		    	h1 = myDocument.paragraphStyles.item("h1");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	myName = h1.name;
		    }
		    catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	h1 = myDocument.paragraphStyles.add({name:"h1"})
			with(h1){
				if(areStyled==true){
				
				
				basedOn = myDocument.paragraphStyles.item("body");	
				//nextStyle =  myDocument.paragraphStyles.item("Inhaltsverzeichnis");
					
				pointSize = thePointSize*thePointSizeFactorHigh;
				leading = 11.5;
				tracking = 100;
				appliedFont = myFontReg;
				kerningMethod : "Metrics";
				tracking  = 100; //The amount by which to loosen or tighten a block of text, specified in thousands of an em.
				capitalization = Capitalization.ALL_CAPS;
				position = Position.NORMAL; // The text position relative to the baseline.
				Underline = false;
				strikeThru = false;
				ligatures =  true;
				noBreak =  false;
				
				appliedLanguage : "de_DE_2006";
				
			
				alignToBaseline = true;
				gridAlignFirstLineOnly = false;			
				justification = Justification.LEFT_JUSTIFIED; //1667591796;
				balanceRaggedLines  = false;

				
				hyphenation = true;
				hyphenateWordsLongerThan = 5;
				hyphenateAfterFirst = 2;
				hyphenateBeforeLast = 2;
				hyphenateLadderLimit = 3;
				hyphenationZone  = "12.7mm";
				hyphenWeight  = 5;
				hyphenateCapitalizedWords = true;
				hyphenateLastWord = true;

				maximumWordSpacing  = 133; // (Range: 0 to 1000)
				minimumWordSpacing  =  80; // (Range: 0 to 1000)
				desiredWordSpacing  = 100; // (Range: 0 to 1000)
		
				maximumLetterSpacing  = 0; // (Range: -100 to 500) 
				minimumLetterSpacing  =  0; //(Range: -100 to 500) 
				desiredLetterSpacing  = 0; //(Range: -100 to 500) 

				maximumGlyphScaling  = 100; // (Range: 50 to 200)
				minimumGlyphScaling  =  100; //(Range: 50 to 200)
				desiredGlyphScaling  = 100; //(Range: 50 to 200)
		
				autoLeading =  120; //(Range: 0 to 500)
		
				singleWordJustification  = SingleWordJustification.FULLY_JUSTIFIED;
				composer: "Adobe-Absatzsetzer";
				
				dropCapCharacters = 0;// (range: 0 - 150) The number of characters to drop cap.
				dropCapLines = 0; // (range: 0 - 25) The number of lines to drop cap.
//				dropCapStyle = myDocument.charcterStyles.item(0);
//				nestedStyles = 0; // A collection of nested styles

				fillColor = myDocument.swatches.item("Black"); // Schwarz/Black
				fillTint  = 100; 
				overprintFill = false;
				strokeWeight = "1pt";
				strokeColor =  myDocument.swatches.item("None");
				strokeTint = 100;
				overprintStroke  = false;
				
				underline = false;
				strikeThru = false;
			}
				}
		    }	
				try{
			    	h2 = myDocument.paragraphStyles.item("h2");
			    	//If the paragraph style does not exist, trying to get its name will generate an error.
			    	myName = h2.name;
			    }
			    catch (myError){
			    	//The paragraph style did not exist, so create it.
			    	h2 = myDocument.paragraphStyles.add({name:"h2"})
				with(h2){
					if(areStyled==true){

					basedOn = myDocument.paragraphStyles.item("body");	
					nextStyle =  myDocument.paragraphStyles.item("h2");	

					pointSize = thePointSize;
					leading = 11.9;
					tracking = 0;
					appliedFont = myFontItal;
					kerningMethod : "Metrics";
					tracking  = 100; //The amount by which to loosen or tighten a block of text, specified in thousands of an em.
					capitalization = Capitalization.NORMAL;
					position = Position.NORMAL; // The text position relative to the baseline.
					Underline = false;
					strikeThru = false;
					ligatures =  true;
					noBreak =  false;

					appliedLanguage : "English: UK";

					firstLineIndent = "3mm";


					alignToBaseline = true;
					gridAlignFirstLineOnly = false;			
					justification = Justification.CENTER_ALIGN; 
					balanceRaggedLines  = false;

					hyphenation = true;
					hyphenateWordsLongerThan = 5;
					hyphenateAfterFirst = 2;
					hyphenateBeforeLast = 2;
					hyphenateLadderLimit = 3;
					hyphenationZone  = "12.7mm";
					hyphenWeight  = 5;
					hyphenateCapitalizedWords = true;
					hyphenateLastWord = true;

					maximumWordSpacing  = 110; // (Range: 0 to 1000)
					minimumWordSpacing  =  80; // (Range: 0 to 1000)
					desiredWordSpacing  = 100; // (Range: 0 to 1000)

					maximumLetterSpacing  = 0; // (Range: -100 to 500) 
					minimumLetterSpacing  =  0; //(Range: -100 to 500) 
					desiredLetterSpacing  = 0; //(Range: -100 to 500) 

					maximumGlyphScaling  = 100; // (Range: 50 to 200)
					minimumGlyphScaling  =  100; //(Range: 50 to 200)
					desiredGlyphScaling  = 100; //(Range: 50 to 200)

					autoLeading =  120; //(Range: 0 to 500)

					singleWordJustification  = SingleWordJustification.FULLY_JUSTIFIED;
					composer: "Adobe-Absatzsetzer";

					dropCapCharacters = 0;// (range: 0 - 150) The number of characters to drop cap.
					dropCapLines = 0; // (range: 0 - 25) The number of lines to drop cap.
	//				dropCapStyle = myDocument.charcterStyles.item(0);
	//				nestedStyles = 0; // A collection of nested styles

					fillColor = myFillColor; // Schwarz/Black
					fillTint  = 100; 
					overprintFill = false;
					strokeWeight = "1pt";
					strokeColor =  myStrokeColor;
					strokeTint = 100;
					overprintStroke  = false;

					underline = false;
					strikeThru = false;
					}
					}
			    }
					try{
				    	h3 = myDocument.paragraphStyles.item("h3");
				    	//If the paragraph style does not exist, trying to get its name will generate an error.
				    	myName = h3.name;
				    }
				    catch (myError){
				    	//The paragraph style did not exist, so create it.
				    	h2 = myDocument.paragraphStyles.add({name:"h3"})
					with(h2){
						if(areStyled==true){

						basedOn = myDocument.paragraphStyles.item("body");	
						nextStyle =  myDocument.paragraphStyles.item("h3");	

						pointSize = thePointSize;
						leading = 11.9;
						tracking = 0;
						appliedFont = myFontItal;
						kerningMethod : "Metrics";
						tracking  = 100; //The amount by which to loosen or tighten a block of text, specified in thousands of an em.
						capitalization = Capitalization.NORMAL;
						position = Position.NORMAL; // The text position relative to the baseline.
						Underline = false;
						strikeThru = false;
						ligatures =  true;
						noBreak =  false;

						appliedLanguage : "English: UK";

						firstLineIndent = "3mm";


						alignToBaseline = true;
						gridAlignFirstLineOnly = false;			
						justification = Justification.CENTER_ALIGN; 
						balanceRaggedLines  = false;

						hyphenation = true;
						hyphenateWordsLongerThan = 5;
						hyphenateAfterFirst = 2;
						hyphenateBeforeLast = 2;
						hyphenateLadderLimit = 3;
						hyphenationZone  = "12.7mm";
						hyphenWeight  = 5;
						hyphenateCapitalizedWords = true;
						hyphenateLastWord = true;

						maximumWordSpacing  = 110; // (Range: 0 to 1000)
						minimumWordSpacing  =  80; // (Range: 0 to 1000)
						desiredWordSpacing  = 100; // (Range: 0 to 1000)

						maximumLetterSpacing  = 0; // (Range: -100 to 500) 
						minimumLetterSpacing  =  0; //(Range: -100 to 500) 
						desiredLetterSpacing  = 0; //(Range: -100 to 500) 

						maximumGlyphScaling  = 100; // (Range: 50 to 200)
						minimumGlyphScaling  =  100; //(Range: 50 to 200)
						desiredGlyphScaling  = 100; //(Range: 50 to 200)

						autoLeading =  120; //(Range: 0 to 500)

						singleWordJustification  = SingleWordJustification.FULLY_JUSTIFIED;
						composer: "Adobe-Absatzsetzer";

						dropCapCharacters = 0;// (range: 0 - 150) The number of characters to drop cap.
						dropCapLines = 0; // (range: 0 - 25) The number of lines to drop cap.
		//				dropCapStyle = myDocument.charcterStyles.item(0);
		//				nestedStyles = 0; // A collection of nested styles

						fillColor = myFillColor; // Schwarz/Black
						fillTint  = 100; 
						overprintFill = false;
						strokeWeight = "1pt";
						strokeColor =  myStrokeColor;
						strokeTint = 100;
						overprintStroke  = false;

						underline = false;
						strikeThru = false;
						}
						}
				    }
			
			try{
		    	Inhaltsverzeichnis = myDocument.paragraphStyles.item("Inhaltsverzeichnis");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	myName = Inhaltsverzeichnis.name;
		    }
		    catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	Inhaltsverzeichnis = myDocument.paragraphStyles.add({name:"Inhaltsverzeichnis"})
			with(Inhaltsverzeichnis){
				if(areStyled==true){
				
				basedOn = myDocument.paragraphStyles.item("body");	
				nextStyle =  myDocument.paragraphStyles.item("Inhaltsverzeichnis");	
				 
				pointSize = thePointSize;
				leading = 11.9;
				tracking = 0;
				appliedFont = myFontReg;
				kerningMethod : "Metrics";
				tracking  = 100; //The amount by which to loosen or tighten a block of text, specified in thousands of an em.
				capitalization = Capitalization.NORMAL;
				position = Position.NORMAL; // The text position relative to the baseline.
				Underline = false;
				strikeThru = false;
				ligatures =  true;
				noBreak =  false;
				
				appliedLanguage : "English: UK";

				alignToBaseline = true;
				gridAlignFirstLineOnly = false;			
				justification = Justification.LEFT_ALIGN; 
				balanceRaggedLines  = false;
				
				hyphenation = true;
				hyphenateWordsLongerThan = 5;
				hyphenateAfterFirst = 2;
				hyphenateBeforeLast = 2;
				hyphenateLadderLimit = 3;
				hyphenationZone  = "12.7mm";
				hyphenWeight  = 5;
				hyphenateCapitalizedWords = true;
				hyphenateLastWord = true;

				maximumWordSpacing  = 110; // (Range: 0 to 1000)
				minimumWordSpacing  =  80; // (Range: 0 to 1000)
				desiredWordSpacing  = 100; // (Range: 0 to 1000)
		
				maximumLetterSpacing  = 0; // (Range: -100 to 500) 
				minimumLetterSpacing  =  0; //(Range: -100 to 500) 
				desiredLetterSpacing  = 0; //(Range: -100 to 500) 

				maximumGlyphScaling  = 100; // (Range: 50 to 200)
				minimumGlyphScaling  =  100; //(Range: 50 to 200)
				desiredGlyphScaling  = 100; //(Range: 50 to 200)
		
				autoLeading =  120; //(Range: 0 to 500)
		
				singleWordJustification  = SingleWordJustification.FULLY_JUSTIFIED;
				composer: "Adobe-Absatzsetzer";
				
				dropCapCharacters = 0;// (range: 0 - 150) The number of characters to drop cap.
				dropCapLines = 0; // (range: 0 - 25) The number of lines to drop cap.
//				dropCapStyle = myDocument.charcterStyles.item(0);
//				nestedStyles = 0; // A collection of nested styles

				fillColor = myFillColor; // Schwarz/Black
				fillTint  = 100; 
				overprintFill = false;
				strokeWeight = "1pt";
				strokeColor =  myStrokeColor;
				strokeTint = 100;
				overprintStroke  = false;
				
				underline = false;
				strikeThru = false;
				}
				
				}
		    }
			try{
		    	quote = myDocument.paragraphStyles.item("quote");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	myName = quote.name;
		    }
		    catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	quote = myDocument.paragraphStyles.add({name:"quote"})
			with(quote){
				if(areStyled==true){
				
				basedOn = myDocument.paragraphStyles.item("body");	
				nextStyle =  myDocument.paragraphStyles.item("quote");	
				 
				pointSize = thePointSize;
				leading = 11.9;
				tracking = 0;
				appliedFont = myFontItal;
				kerningMethod : "Metrics";
				tracking  = 100; //The amount by which to loosen or tighten a block of text, specified in thousands of an em.
				capitalization = Capitalization.NORMAL;
				position = Position.NORMAL; // The text position relative to the baseline.
				Underline = false;
				strikeThru = false;
				ligatures =  true;
				noBreak =  false;
				
				appliedLanguage : "English: UK";
				
				firstLineIndent = "3mm";


				alignToBaseline = true;
				gridAlignFirstLineOnly = false;			
				justification = Justification.LEFT_JUSTIFIED; 
				balanceRaggedLines  = false;
				
				hyphenation = true;
				hyphenateWordsLongerThan = 5;
				hyphenateAfterFirst = 2;
				hyphenateBeforeLast = 2;
				hyphenateLadderLimit = 3;
				hyphenationZone  = "12.7mm";
				hyphenWeight  = 5;
				hyphenateCapitalizedWords = true;
				hyphenateLastWord = true;

				maximumWordSpacing  = 110; // (Range: 0 to 1000)
				minimumWordSpacing  =  80; // (Range: 0 to 1000)
				desiredWordSpacing  = 100; // (Range: 0 to 1000)
		
				maximumLetterSpacing  = 0; // (Range: -100 to 500) 
				minimumLetterSpacing  =  0; //(Range: -100 to 500) 
				desiredLetterSpacing  = 0; //(Range: -100 to 500) 

				maximumGlyphScaling  = 100; // (Range: 50 to 200)
				minimumGlyphScaling  =  100; //(Range: 50 to 200)
				desiredGlyphScaling  = 100; //(Range: 50 to 200)
		
				autoLeading =  120; //(Range: 0 to 500)
		
				singleWordJustification  = SingleWordJustification.FULLY_JUSTIFIED;
				composer: "Adobe-Absatzsetzer";
				
				dropCapCharacters = 0;// (range: 0 - 150) The number of characters to drop cap.
				dropCapLines = 0; // (range: 0 - 25) The number of lines to drop cap.
//				dropCapStyle = myDocument.charcterStyles.item(0);
//				nestedStyles = 0; // A collection of nested styles

				fillColor = myFillColor; // Schwarz/Black
				fillTint  = 100; 
				overprintFill = false;
				strokeWeight = "1pt";
				strokeColor =  myStrokeColor;
				strokeTint = 100;
				overprintStroke  = false;
				
				underline = false;
				strikeThru = false;


					}
				}
		    }
			try{
		    	Autorennamen = myDocument.paragraphStyles.item("Autorennamen");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	myName = Autorennamen.name;
		    }
		    catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	Autorennamen = myDocument.paragraphStyles.add({name:"Autorennamen"})
			with(Autorennamen){
				if(areStyled==true){
				
				basedOn = myDocument.paragraphStyles.item("body");	
				nextStyle =  myDocument.paragraphStyles.item("Autorennamen");	
				 
				pointSize = thePointSize* thePointSizeFactorlow;
				leading = 11.9;
				tracking = 0;
				appliedFont = myFontItal;
				kerningMethod : "Metrics";
				tracking  = 100; //The amount by which to loosen or tighten a block of text, specified in thousands of an em.
				capitalization = Capitalization.NORMAL;
				position = Position.NORMAL; // The text position relative to the baseline.
				Underline = false;
				strikeThru = false;
				ligatures =  true;
				noBreak =  false;
				
				appliedLanguage : "English: UK";
				
				firstLineIndent = "3mm";


				alignToBaseline = true;
				gridAlignFirstLineOnly = false;			
				justification = Justification.RIGHT_ALIGN; 
				balanceRaggedLines  = false;
				
				hyphenation = true;
				hyphenateWordsLongerThan = 5;
				hyphenateAfterFirst = 2;
				hyphenateBeforeLast = 2;
				hyphenateLadderLimit = 3;
				hyphenationZone  = "12.7mm";
				hyphenWeight  = 5;
				hyphenateCapitalizedWords = true;
				hyphenateLastWord = true;

				maximumWordSpacing  = 110; // (Range: 0 to 1000)
				minimumWordSpacing  =  80; // (Range: 0 to 1000)
				desiredWordSpacing  = 100; // (Range: 0 to 1000)
		
				maximumLetterSpacing  = 0; // (Range: -100 to 500) 
				minimumLetterSpacing  =  0; //(Range: -100 to 500) 
				desiredLetterSpacing  = 0; //(Range: -100 to 500) 

				maximumGlyphScaling  = 100; // (Range: 50 to 200)
				minimumGlyphScaling  =  100; //(Range: 50 to 200)
				desiredGlyphScaling  = 100; //(Range: 50 to 200)
		
				autoLeading =  120; //(Range: 0 to 500)
		
				singleWordJustification  = SingleWordJustification.FULLY_JUSTIFIED;
				composer: "Adobe-Absatzsetzer";
				
				dropCapCharacters = 0;// (range: 0 - 150) The number of characters to drop cap.
				dropCapLines = 0; // (range: 0 - 25) The number of lines to drop cap.
//				dropCapStyle = myDocument.charcterStyles.item(0);
//				nestedStyles = 0; // A collection of nested styles

				fillColor = myFillColor; // Schwarz/Black
				fillTint  = 100; 
				overprintFill = false;
				strokeWeight = "1pt";
				strokeColor =  myStrokeColor;
				strokeTint = 100;
				overprintStroke  = false;
				
				underline = false;
				strikeThru = false;
			}
				}
		    }
			try{
		    	Fussnoten = myDocument.paragraphStyles.item("Fussnoten");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	myName = Fussnoten.name;
		    }
		    catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	Fussnoten = myDocument.paragraphStyles.add({name:"Fussnoten"})
			with(Fussnoten){
				if(areStyled==true){
				
				nextStyle =  myDocument.paragraphStyles.item("Fussnoten");	
				 
				pointSize = thePointSize* thePointSizeFactorlow;
				leading = 10;
				tracking = 0;
				appliedFont = myFontReg;
				kerningMethod : "Metrics";
				tracking  = 100; //The amount by which to loosen or tighten a block of text, specified in thousands of an em.
				capitalization = Capitalization.NORMAL;
				position = Position.NORMAL; // The text position relative to the baseline.
				Underline = false;
				strikeThru = false;
				ligatures =  true;
				noBreak =  false;
				
				appliedLanguage : "de_DE_2006";
				

				alignToBaseline = true;
				gridAlignFirstLineOnly = false;			
				justification = Justification.LEFT_JUSTIFIED; 
				balanceRaggedLines  = false;
				
				var tab1 = Fussnoten.tabStops.add();
				with(tab1){
					alignment = TabStopAlignment.LEFT_ALIGN;
//					leader = null;
					position = "2.4mm";
					
				}
				var tab2 = Fussnoten.tabStops.add();
				with(tab2){
					alignment = TabStopAlignment.LEFT_ALIGN;
//					leader = null;
					position = "3.7mm";
				
					
				}				
				
				var tab3 = Fussnoten.tabStops.add();
				with(tab3){
					alignment = TabStopAlignment.LEFT_ALIGN;
//					leader = null;
					position = "5.0mm";
					
				}
				 
				
				hyphenation = true;
				hyphenateWordsLongerThan = 5;
				hyphenateAfterFirst = 2;
				hyphenateBeforeLast = 2;
				hyphenateLadderLimit = 3;
				hyphenationZone  = "12.7mm";
				hyphenWeight  = 5;
				hyphenateCapitalizedWords = true;
				hyphenateLastWord = true;

				maximumWordSpacing  = 133; // (Range: 0 to 1000)
				minimumWordSpacing  =  80; // (Range: 0 to 1000)
				desiredWordSpacing  = 100; // (Range: 0 to 1000)
		
				maximumLetterSpacing  = 0; // (Range: -100 to 500) 
				minimumLetterSpacing  =  0; //(Range: -100 to 500) 
				desiredLetterSpacing  = 0; //(Range: -100 to 500) 

				maximumGlyphScaling  = 100; // (Range: 50 to 200)
				minimumGlyphScaling  =  100; //(Range: 50 to 200)
				desiredGlyphScaling  = 100; //(Range: 50 to 200)
		
				autoLeading =  120; //(Range: 0 to 500)
		
//				autoLeading = // 120%; (Range: 0 to 500)
		
				singleWordJustification  = SingleWordJustification.FULLY_JUSTIFIED;
				composer: "Adobe-Absatzsetzer";
				
				dropCapCharacters = 0;// (range: 0 - 150) The number of characters to drop cap.
				dropCapLines = 0; // (range: 0 - 25) The number of lines to drop cap.
//				dropCapStyle = myDocument.charcterStyles.item(0);
//				nestedStyles = 0; // A collection of nested styles

				fillColor = myFillColor; // Schwarz/Black
				fillTint  = 100; 
				overprintFill = false;
				strokeWeight = "1pt";
				strokeColor =  myStrokeColor;
				strokeTint = 100;
				overprintStroke  = false;
				
				underline = false;
				strikeThru = false;
			}
				}
		    }
			
			
			try{
		    	Bildunterschriften = myDocument.paragraphStyles.item("Bildunterschriften");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	myName = Bildunterschriften.name;
		    }
		    catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	Bildunterschriften = myDocument.paragraphStyles.add({name:"Bildunterschriften"})
			with(Bildunterschriften){	
				if(areStyled==true){
						
				basedOn = myDocument.paragraphStyles.item("body");	
				nextStyle =  myDocument.paragraphStyles.item("Bildunterschriften");	
				 
				pointSize = thePointSize* thePointSizeFactorlow;
				leading = 10;
				tracking = 0;
				appliedFont = myFontSemiBold;
				kerningMethod : "Metrics";
				tracking  = 100; //The amount by which to loosen or tighten a block of text, specified in thousands of an em.
				capitalization = Capitalization.NORMAL;
				position = Position.NORMAL; // The text position relative to the baseline.
				Underline = false;
				strikeThru = false;
				ligatures =  true;
				noBreak =  false;
				
				appliedLanguage : "de_DE_2006";
				

				alignToBaseline = true;
				gridAlignFirstLineOnly = true;			
				justification = Justification.LEFT_ALIGN; 
				balanceRaggedLines  = false;
				
				leftIndent  = "3mm";
				firstLineIndent = "-3mm";

				
				var tab1 = Fussnoten.tabStops.add();
			with(tab1){
					alignment = TabStopAlignment.LEFT_ALIGN;
//					leader = null;
					position = "4mm";
					
				}
				
				hyphenation = true;
				hyphenateWordsLongerThan = 5;
				hyphenateAfterFirst = 2;
				hyphenateBeforeLast = 2;
				hyphenateLadderLimit = 3;
				hyphenationZone  = "12.7mm";
				hyphenWeight  = 5;
				hyphenateCapitalizedWords = true;
				hyphenateLastWord = true;

				maximumWordSpacing  = 110; // (Range: 0 to 1000)
				minimumWordSpacing  =  80; // (Range: 0 to 1000)
				desiredWordSpacing  = 100; // (Range: 0 to 1000)
		
				maximumLetterSpacing  = 0; // (Range: -100 to 500) 
				minimumLetterSpacing  =  0; //(Range: -100 to 500) 
				desiredLetterSpacing  = 0; //(Range: -100 to 500) 

				maximumGlyphScaling  = 100; // (Range: 50 to 200)
				minimumGlyphScaling  =  100; //(Range: 50 to 200)
				desiredGlyphScaling  = 100; //(Range: 50 to 200)
		
				autoLeading =  120; //(Range: 0 to 500)
		
				singleWordJustification  = SingleWordJustification.FULLY_JUSTIFIED;
				composer: "Adobe-Absatzsetzer";
				
				dropCapCharacters = 0;// (range: 0 - 150) The number of characters to drop cap.
				dropCapLines = 0; // (range: 0 - 25) The number of lines to drop cap.
//				dropCapStyle = myDocument.charcterStyles.item(0);
//				nestedStyles = 0; // A collection of nested styles

				fillColor = myFillColor; // Schwarz/Black
				fillTint  = 100; 
				overprintFill = false;
				strokeWeight = "1pt";
				strokeColor =  myStrokeColor;
				strokeTint = 100;
				overprintStroke  = false;
				
				underline = false;
				strikeThru = false;
			}
				}
		    }
			try{
		    	Impressum = myDocument.paragraphStyles.item("Impressum");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	myName = Impressum.name;
			    }
			catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	Impressum = myDocument.paragraphStyles.add({name:"Impressum"})
			with(Impressum){
				if(areStyled==true){
				
				basedOn = myDocument.paragraphStyles.item("body");	
				nextStyle =  myDocument.paragraphStyles.item("Impressum");	
				 
				pointSize = thePointSize* thePointSizeFactorlow;
				leading = 10;
				tracking = 0;
				appliedFont = myFontReg;
				kerningMethod : "Metrics";
				tracking  = 100; //The amount by which to loosen or tighten a block of text, specified in thousands of an em.
				capitalization = Capitalization.NORMAL;
				position = Position.NORMAL; // The text position relative to the baseline.
				Underline = false;
				strikeThru = false;
				ligatures =  true;
				noBreak =  false;
				
				appliedLanguage : "de_DE_2006";
				

				alignToBaseline = true;
				gridAlignFirstLineOnly = false;			
				justification = Justification.LEFT_JUSTIFIED; 
				balanceRaggedLines  = false;
				
				leftIndent  = "3mm";
				firstLineIndent = "-3mm";
				
				hyphenation = true;
				hyphenateWordsLongerThan = 5;
				hyphenateAfterFirst = 2;
				hyphenateBeforeLast = 2;
				hyphenateLadderLimit = 3;
				hyphenationZone  = "12.7mm";
				hyphenWeight  = 5;
				hyphenateCapitalizedWords = true;
				hyphenateLastWord = true;

				maximumWordSpacing  = 110; // (Range: 0 to 1000)
				minimumWordSpacing  =  80; // (Range: 0 to 1000)
				desiredWordSpacing  = 100; // (Range: 0 to 1000)
		
				maximumLetterSpacing  = 0; // (Range: -100 to 500) 
				minimumLetterSpacing  =  0; //(Range: -100 to 500) 
				desiredLetterSpacing  = 0; //(Range: -100 to 500) 

				maximumGlyphScaling  = 100; // (Range: 50 to 200)
				minimumGlyphScaling  =  100; //(Range: 50 to 200)
				desiredGlyphScaling  = 100; //(Range: 50 to 200)
		
				autoLeading =  120; //(Range: 0 to 500)
		
				singleWordJustification  = SingleWordJustification.FULLY_JUSTIFIED;
				composer: "Adobe-Absatzsetzer";
				
				dropCapCharacters = 0;// (range: 0 - 150) The number of characters to drop cap.
				dropCapLines = 0; // (range: 0 - 25) The number of lines to drop cap.
//				dropCapStyle = myDocument.charcterStyles.item(0);
//				nestedStyles = 0; // A collection of nested styles

				fillColor = myFillColor; // Schwarz/Black
				fillTint  = 100; 
				overprintFill = false;
				strokeWeight = "1pt";
				strokeColor =  myStrokeColor;
				strokeTint = 100;
				overprintStroke  = false;
				
				underline = false;
				strikeThru = false;
				
					}
				}
		    }
			try{
		    	Pagina = myDocument.paragraphStyles.item("Pagina");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	myName = Pagina.name;
			    }
		    catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	Pagina = myDocument.paragraphStyles.add({name:"Pagina"})
			with(Pagina){
				if(areStyled==true){
				
				basedOn = myDocument.paragraphStyles.item("Fussnoten");	
				nextStyle =  myDocument.paragraphStyles.item("Pagina");	
				 
				pointSize = thePointSize;
				leading = 11.5;
				tracking = 0;
				appliedFont = myFontReg;
				kerningMethod : "Metrics";
				tracking  = 100; //The amount by which to loosen or tighten a block of text, specified in thousands of an em.
				capitalization = Capitalization.NORMAL;
				position = Position.NORMAL; // The text position relative to the baseline.
				Underline = false;
				strikeThru = false;
				ligatures =  true;
				noBreak =  false;
				
				appliedLanguage : "de_DE_2006";
				

				alignToBaseline = true;
				gridAlignFirstLineOnly = false;			
				justification = Justification.CENTER_ALIGN; 
				balanceRaggedLines  = false;
				
				var tab1 = Fussnoten.tabStops.add();
				with(tab1){
					alignment = TabStopAlignment.LEFT_ALIGN;
//					leader = null;
					position = "2.4mm";
					
				}
				var tab2 = Fussnoten.tabStops.add();
				with(tab2){
					alignment = TabStopAlignment.LEFT_ALIGN;
//					leader = null;
					position = "3.7mm";
				
					
				}				
				
				var tab3 = Fussnoten.tabStops.add();
				with(tab3){
					alignment = TabStopAlignment.LEFT_ALIGN;
//					leader = null;
					position = "5.0mm";
					
				}
				 
				
				hyphenation = true;
				hyphenateWordsLongerThan = 5;
				hyphenateAfterFirst = 2;
				hyphenateBeforeLast = 2;
				hyphenateLadderLimit = 3;
				hyphenationZone  = "12.7mm";
				hyphenWeight  = 5;
				hyphenateCapitalizedWords = true;
				hyphenateLastWord = true;

				maximumWordSpacing  = 133; // (Range: 0 to 1000)
				minimumWordSpacing  =  80; // (Range: 0 to 1000)
				desiredWordSpacing  = 100; // (Range: 0 to 1000)
		
				maximumLetterSpacing  = 0; // (Range: -100 to 500) 
				minimumLetterSpacing  =  0; //(Range: -100 to 500) 
				desiredLetterSpacing  = 0; //(Range: -100 to 500) 

				maximumGlyphScaling  = 100; // (Range: 50 to 200)
				minimumGlyphScaling  =  100; //(Range: 50 to 200)
				desiredGlyphScaling  = 100; //(Range: 50 to 200)
		
				autoLeading =  120; //(Range: 0 to 500)
		
				singleWordJustification  = SingleWordJustification.FULLY_JUSTIFIED;
				composer: "Adobe-Absatzsetzer";
				
				dropCapCharacters = 0;// (range: 0 - 150) The number of characters to drop cap.
				dropCapLines = 0; // (range: 0 - 25) The number of lines to drop cap.
//				dropCapStyle = myDocument.charcterStyles.item(0);
//				nestedStyles = 0; // A collection of nested styles

				fillColor = myFillColor; // Schwarz/Black
				fillTint  = 100; 
				overprintFill = false;
				strokeWeight = "1pt";
				strokeColor =  myStrokeColor;
				strokeTint = 100;
				overprintStroke  = false;
				
				underline = false;
				strikeThru = false;
			}
				}
		    }

			try{
		    	img = myDocument.paragraphStyles.item("img");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	myName = img.name;
			    }
			catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	img = myDocument.paragraphStyles.add({name:"img"});
			with(img){		
				if(areStyled==true){
					
				alignToBaseline = true;
				leading = 23;
				pointSize = 23;
				fillColor = "img";
				appliedFont = myFontItal;
			}
				}
		    }
}


function makeCharStyles(areStyled,myDocument,myFontReg,myFontBold, myFontItal, myFontSemiBold, myFontSemiBoldItal) {
	
		var myName;
		var ZITAT_Namen, Inhaltsverzeichnis_Pagina, Fussnoten_unten, Fussnoten_oben, BUs_kursiv, semibold, versal;
		var myFillColor = myDocument.swatches.item("Black"); // Schwarz/Black
		var myStrokeColor =  myDocument.swatches.item("None");
		var thePointSize = 12;
		// use this for proportinal scaling of the fonts
		// makes it easier to control
		var thePointSizeFactorlow = 0.9;
		var thePointSizeFactorHigh = 1.2;
	
	
	
			try{
		    	ZITAT_Namen = myDocument.characterStyles.item("ZITAT_Namen");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	myName = ZITAT_Namen.name;
		    }
		    catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	ZITAT_Namen = myDocument.characterStyles.add({name:"ZITAT_Namen"})
			with(ZITAT_Namen){
				if(areStyled==true){
				pointSize = thePointSize*thePointSizeFactorlow;
				leading = 10;
				appliedFont = myFontItal;
//				kerningMethod : "Metrics";
//				capitalization = Capitalization.ALL_CAPS;
//				position = Position.NORMAL; // The text position relative to the baseline.
//				Underline = false;
//				strikeThru = false;
//				ligatures =  true;
//				noBreak =  false;
				
				appliedLanguage : "de_DE_2006";

				fillColor = myFillColor; // Schwarz/Black
				fillTint  = 100; 
				overprintFill = false;
				strokeWeight = "1pt";
				strokeColor =  myStrokeColor;
				strokeTint = 100;
				overprintStroke  = false;
				
				underline = false;
				strikeThru = false;
					}
				}
		    }	
	
			try{
		    	Inhaltsverzeichnis_Pagina = myDocument.characterStyles.item("Inhaltsverzeichnis_Pagina");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	myName = Inhaltsverzeichnis_Pagina.name;
		    }
		    catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	Inhaltsverzeichnis_Pagina = myDocument.characterStyles.add({name:"Inhaltsverzeichnis_Pagina"})
			with(Inhaltsverzeichnis_Pagina){
				if(areStyled==true){

				pointSize = thePointSize;
				leading = 11.9;
				appliedFont = myFontBold;
				otfFigureStyle = OTFFigureStyle.TABULAR_LINING;
//				kerningMethod : "Metrics";
//				capitalization = Capitalization.ALL_CAPS;
//				position = Position.NORMAL; // The text position relative to the baseline.
//				Underline = false;
//				strikeThru = false;
//				ligatures =  true;
//				noBreak =  false;
				
				appliedLanguage : "de_DE_2006";

				fillColor = myFillColor; // Schwarz/Black
				fillTint  = 100; 
				overprintFill = false;
				strokeWeight = "1pt";
				strokeColor =  myStrokeColor;
				strokeTint = 100;
				overprintStroke  = false;
				
				underline = false;
				strikeThru = false;
					}
				}
		    }
				
			try{
		    	Fussnoten_unten = myDocument.characterStyles.item("Fussnoten_unten");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	myName = Fussnoten_unten.name;
		    }
		    catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	Fussnoten_unten = myDocument.characterStyles.add({name:"Fussnoten_unten"})
			with(Fussnoten_unten){
				if(areStyled==true){

				pointSize = thePointSize*thePointSizeFactorlow;
				leading = 9;
				appliedFont = myFontBold;
				otfFigureStyle = OTFFigureStyle.TABULAR_LINING;
//				kerningMethod : "Metrics";
//				capitalization = Capitalization.ALL_CAPS;
//				position = Position.NORMAL; // The text position relative to the baseline.
//				Underline = false;
//				strikeThru = false;
//				ligatures =  true;
//				noBreak =  false;
				
				appliedLanguage : "de_DE_2006";

				fillColor = myFillColor; // Schwarz/Black
				fillTint  = 100; 
				overprintFill = false;
				strokeWeight = "1pt";
				strokeColor =  myStrokeColor;
				strokeTint = 100;
				overprintStroke  = false;
				
				underline = false;
				strikeThru = false;
					}
				}
		    }
				
			try{
		    	Fussnoten_oben = myDocument.characterStyles.item("Fussnoten_oben");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	myName = Fussnoten_oben.name;
		    }
		    catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	Fussnoten_oben = myDocument.characterStyles.add({name:"Fussnoten_oben"})
			with(Fussnoten_oben){
				if(areStyled==true){
				
				pointSize = thePointSize*(thePointSizeFactorlow);
				leading = 9;
				appliedFont = myFontReg;
				
				baselineShift  = "2.5pt";
				
				otfFigureStyle = OTFFigureStyle.TABULAR_LINING;
//				kerningMethod : "Metrics";
//				capitalization = Capitalization.ALL_CAPS;
//				position = Position.NORMAL; // The text position relative to the baseline.
//				Underline = false;
//				strikeThru = false;
//				ligatures =  true;
//				noBreak =  false;
				
				appliedLanguage : "de_DE_2006";

				fillColor = myFillColor; // Schwarz/Black
				fillTint  = 100; 
				overprintFill = false;
				strokeWeight = "1pt";
				strokeColor =  myStrokeColor;
				strokeTint = 100;
				overprintStroke  = false;
				
				underline = false;
				strikeThru = false;
				strikeThru = false;
					}
				}
		    }
				
			try{
		    	BUs_kursiv = myDocument.characterStyles.item("BUs_kursiv");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	myName = BUs_kursiv.name;
		    }
		    catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	BUs_kursiv = myDocument.characterStyles.add({name:"BUs_kursiv"})
			with(BUs_kursiv){
				if(areStyled==true){
				
//				pointSize = 5.5;
//				leading = 9;
				appliedFont = myFontItal;
				
//				baselineShift  = "2.5pt";
//				
//				otfFigureStyle = OTFFigureStyle.TABULAR_LINING;
//				kerningMethod : "Metrics";
//				capitalization = Capitalization.ALL_CAPS;
//				position = Position.NORMAL; // The text position relative to the baseline.
//				Underline = false;
//				strikeThru = false;
//				ligatures =  true;
//				noBreak =  false;
				
//				appliedLanguage : "de_DE_2006";
//
//				fillColor = myFillColor; // Schwarz/Black
//				fillTint  = 100; 
//				overprintFill = false;
//				strokeWeight = "1pt";
//				strokeColor =  myStrokeColor;
//				strokeTint = 100;
//				overprintStroke  = false;
//				
//				underline = false;
//				strikeThru = false;
//				strikeThru = false;
					}
				}
		    }
				
			try{
		    	semibold = myDocument.characterStyles.item("semibold");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	myName = semibold.name;
		    }
		    catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	semibold = myDocument.characterStyles.add({name:"semibold"})
			with(semibold){
				if(areStyled==true){

//				pointSize = 5.5;
//				leading = 9;
				appliedFont = myFontSemiBold;
				
//				baselineShift  = "2.5pt";
//				
//				otfFigureStyle = OTFFigureStyle.TABULAR_LINING;
//				kerningMethod : "Metrics";
//				capitalization = Capitalization.ALL_CAPS;
//				position = Position.NORMAL; // The text position relative to the baseline.
//				Underline = false;
//				strikeThru = false;
//				ligatures =  true;
//				noBreak =  false;
				
//				appliedLanguage : "de_DE_2006";
//
//				fillColor = myFillColor; // Schwarz/Black
//				fillTint  = 100; 
//				overprintFill = false;
//				strokeWeight = "1pt";
//				strokeColor =  myStrokeColor;
//				strokeTint = 100;
//				overprintStroke  = false;
//				
//				underline = false;
//				strikeThru = false;
//				strikeThru = false;
					}
				}
		    }
				
			try{
		    	versal = myDocument.characterStyles.item("versal");
		    	//If the paragraph style does not exist, trying to get its name will generate an error.
		    	myName = versal.name;
		    }
		    catch (myError){
		    	//The paragraph style did not exist, so create it.
		    	versal = myDocument.characterStyles.add({name:"versal"})
			with(versal){
				if(areStyled==true){
				
//				pointSize = 7;
//				leading = 10;
				tracking = 75;
//				appliedFont = myFontItal;
//				kerningMethod : "Metrics";
				capitalization = Capitalization.ALL_CAPS;
//				position = Position.NORMAL; // The text position relative to the baseline.
//				Underline = false;
//				strikeThru = false;
//				ligatures =  true;
//				noBreak =  false;
				
//				appliedLanguage : "de_DE_2006";
//
//				fillColor = myFillColor; // Schwarz/Black
//				fillTint  = 100; 
//				overprintFill = false;
//				strokeWeight = "1pt";
//				strokeColor =  myStrokeColor;
//				strokeTint = 100;
//				overprintStroke  = false;
//				
//				underline = false;
//				strikeThru = false;
					}
				}
		    }
}