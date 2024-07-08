from django.shortcuts import render
from django.core.mail import EmailMessage,send_mail
import threading
from django.conf import settings
from django.contrib import messages
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
def index(request):
    return render(request,'index.html')

class EmailThread(threading.Thread):
    def __init__(self,email_message):
        self.email_message=email_message
        threading.Thread.__init__(self)
    def run(self):
        self.email_message.send()

@csrf_exempt
def contact(request):
    if request.method == 'POST':
        try:
            username = request.POST['username']
            company = request.POST['company']
            email = request.POST['email']
            phone = request.POST['phone']
            package = request.POST['package']
            user_message = request.POST['message']

            # Construct email subject and message
            email_subject = 'Contact form submission'
            email_message = (
                f'Hello Tenchoutech,\n\n'
                f'You have received a new contact form submission:\n\n'
                f'Username: {username}\n'
                f'Company: {company}\n'
                f'Email: {email}\n'
                f'Phone: {phone}\n'
                f'Package: {package}\n'
                f'Message:\n{user_message}\n\n'
                f'Thank you!'
            )

            # Send email to your specified email address
            email_message=send_mail(email_subject, email_message, settings.EMAIL_HOST_USER, [settings.EMAIL_HOST_USER])
            EmailThread(email_message).start()
            # Optionally, you can also send a confirmation email to the visitor
            visitor_email_subject = 'Thank you for contacting us'
            visitor_email_message = (
                f'Dear {username},\n\n'
                f'Thank you for contacting us. We will get back to you shortly.\n\n'
                f'Regards,\nThe Tenchoutech Team'
            )
            Vemail_message=send_mail(visitor_email_subject, visitor_email_message, settings.EMAIL_HOST_USER, [email])
            EmailThread(Vemail_message).start()
            messages.success(request, 'Your message has been sent!')
            return render(request, 'contact.html')

        except Exception as e:
            messages.warning(request, f'An error occurred!')
            return render(request, 'contact.html')

    else:
        return render(request, 'contact.html')


def portfolio(request):
    return render(request,'portfolio.html')

def pricing(request):
    return render(request,'pricing.html')

def education(request):
    return render(request,'education.html')

def redesign(request):
    return render(request,'redesign.html')

def development(request):
    return render(request,'webdev.html')

def maintenance(request):
    return render(request,'webmain.html')

def standard(request):
    return render(request,'standard.html')