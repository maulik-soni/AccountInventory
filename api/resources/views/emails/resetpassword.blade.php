@component('mail::message')
# Introduction
You are receiving this message as there has been a request for password change for your account

<a>$url</a>
@component('mail::button', ['url' => $url])
Reset Password
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
