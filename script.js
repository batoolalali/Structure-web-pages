var conti;
var movie= ' is a good Choice';

var c;

if (confirm("Press Ok to continue"))
{
    conti= 'Welcome'
}

document.write('<h3>'+conti+'</h3>');
var yourmovie = prompt("enter your favorite movie type; crime, drama or comedy");


document.write('<spam>'+yourmovie+'</spam>');
document.write('<spam>'+movie+'</spam>');


function GiveSug(YourM)
{
    var sugg;
if (YourM== 'crime' )
{
    document.write( " !  watch Bridge  of Spies is a good crime movie" );
    
    return YourM;


}
    else if (YourM == 'drama')
    {   
        document.write( " !   watch Wonder is a good drama movie" );
        return YourM;

    }
    else if (YourM== 'comedy' )
    {   
        document.write( " !  watch Jumanji is a good comedy movie" );
        return YourM;

    }
    else {
        document.write( " Wronge input" );

    }
}

    GiveSug(yourmovie);


    var color = prompt("PLease enter the color for this page.")
    document.body.style.background= color;tyle.backgroundColor = color;