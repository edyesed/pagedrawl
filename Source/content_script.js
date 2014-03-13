walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
        // and I stole it from https://github.com/panicsteve/cloud-to-butt
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\b(y|Y)ou all\b/g, "$1'all");
	v = v.replace(/\bthink/ig, "reckon");
	v = v.replace(/\b(vokda|scotch|tequila)\b/g, "bourbon");
	v = v.replace(/\b(U|u)sed to\b/g, "$1sedter");
	v = v.replace(/\b(H|h)ave (T|t)o\b/g, "$1afta");
	v = v.replace(/\b(H|h)a(s|d) to\b/g, "$1a$2ta");
	v = v.replace(/\b(W|w)ant to\b/g, "$1anna");
	v = v.replace(/\b(H|h)a(s|d)\b/g, "got");
	v = v.replace(/\b(W|w)ere\b/g, "was");
	v = v.replace(/\b(M|m)ust not\b/g, "$1ustn't");
	v = v.replace(/\b(G|g)od\b/g, "The Good Lord");
	v = v.replace(/\b(coca-*cola|pepsi|dr *pepper|mountain *dew)/ig, "coke");
	v = v.replace(/ing\b/g, "in'");
	
	textNode.nodeValue = v;
}


