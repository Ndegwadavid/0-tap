## Clone Proposal

![lock](/fingerprint.ico)


### **Built with**
--- 
![C Language](https://img.icons8.com/color/48/000000/c-programming.png)
![JavaScript](https://img.icons8.com/color/48/000000/javascript.png)
![HTML](https://img.icons8.com/color/48/000000/html-5.png)
![CSS](https://img.icons8.com/color/48/000000/css3.png)
---


A secure passwordless system based on a user-defined multi-tap sequence that can be recalled and reproduced on login.

During registration, the user taps in the designated tapping area on the screen. This could be a blank div or container on the page.

They complete their pre-chosen tap sequence over 5 rounds, tapping 1 time, then 2 times, then 3 times etc based on their code.

The system detects the number of taps per round in the tapping area. 

No specific tap locations are recorded.

After registration is complete, rather than displaying or storing the tap code:
                        : It is emailed directly to the user's registered email address
                        : The email contains the 5 digit tap count sequence (e.g. 1, 2, 3, 4, 5 in the example)
                        : This keeps the code hidden from shoulder surfing attacks
                        
On laptops and desktops, users can tap using mouse clicks in the designated area. Or a keyboard if needed.

Login works the same way - repeating the tap sequence in the tapping area to authenticate.

## Some additional security considerations:
1.Limit number of registration attempts before locking out user

2.Allow user to reset/recover PIN if forgotten

3.Track and alert on suspicious login attempts

4.Encrypt stored user data and tap codes

5.Regularly regenerate the dot grids to prevent pattern memorization

This project is full open source and open to additional views and testing from the community.


Developed by 

## [David Njoroge](https://github.com/Ndegwadavid)
