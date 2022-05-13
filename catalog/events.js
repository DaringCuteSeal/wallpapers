/* Create a new preview object */
var preview = function(name, variants)
{
	this.name = name;
	this.variants = variants;
}


/* Show image based on given index */
preview.prototype.showImg = function(n) 
{
	this.imgs = document.getElementsByClassName("preview-img-" + this.name);
	this.nImgs = this.imgs.length;

	/* Hide every image */
	for(i = 0; i < this.nImgs; i++)
	{
		this.imgs[i].style.display = "none";
	}

	/* Show image based on given index */
	this.imgs[n].style.display = "block";
}

/* Attach event listeners to each preview */
var variantBtns = [];
var imgPreview = [];

for (let j = 0; j < previews.length; j++)
{
	current_name = previews[j].name;

	variantBtns[j] = document.getElementsByClassName(current_name + '-vars');
	
	imgPreview[j] = new preview(current_name, previews[j].variants);

	for(let k = 0; k < variantBtns[j].length; k++)
	{
		variantBtns[j][k].addEventListener('click', function()
			{
				/* Change the current shown image to the one
				 * corresponding to the clicked variant button
				 */
				imgPreview[j].showImg(k); 

				/* Set all buttons to inactive */
				for(let l = 0; l < variantBtns[j].length; l++)
				{
					variantBtns[j][l].classList.remove('btn-var-curr');
				}
				/* Set clicked button to active */
				variantBtns[j][k].classList.add('btn-var-curr');
			}, false);

		/* Set every preview to show the first image by default */
		imgPreview[j].showImg(0);
		/* Make the first button inactive */
		variantBtns[j][0].classList.add('btn-var-curr');


	}
}

/* Copy link to image to user's clipboard */
let urlElements = document.querySelectorAll('.copy');
urlElements.forEach(function(el)
	{
		el.addEventListener('click', function(e)
			{
				/* Don't actually go to the link */
				e.preventDefault();

				/* Write to the clipboard! */
				navigator.clipboard.writeText(e.target.href);
			}
		);
	}
)
