<?php

namespace App\Http\Controllers;

use App\Mail\StatusDiscardedMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function index()
    {
        return view('index');
    }

    public function discarded()
    {
        Mail::to('alfaroyolanda@hotmail.com')->send(new StatusDiscardedMail('Yolanda'));
    }
}
