var conti;
var movie= ' is a good Choice';
var sugg;

if (confirm("Press Ok to continue"))
{
    conti= 'Welcome'
}

document.write('<h3>'+conti+'</h3>');
var yourmovie = prompt("enter your favorite movie type; crime, drama or comedy");


document.write('<spam>'+yourmovie+'</spam>');
document.write('<spam>'+movie+'</spam>');

if (yourmovie == 'crime' )
{
    sugg= '  !  watch Bridge  of Spies is a good crime movie'}
    else if (yourmovie == 'drama')
    {
        sugg= '!  watch Wonder is a good drama movie';
    }
    else if (yourmovie== 'comedy' )
    {
        sugg= '  !  watch Jumanji is a good comedy movie';
    }
    else {
        sugg='Wronge input';
    }

    
    document.write('<spam>'+sugg+'</spam>');