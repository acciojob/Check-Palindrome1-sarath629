// complete the given function

function palindrome(str){
	str=str.toLowerCase();
 var s=0;
	var end=str.length()-1;
	while (s<end) {
		if(str.charAt(s)==' '){
			s++;
		}
		if(str.charAt(end)==' '){
			end--;
		}
		if(str.charAt(s)!=str.charAt(end)){
			return false;
			
		}
		s++;
		end--;
		
	}
	return true;
}
module.exports = palindrome
