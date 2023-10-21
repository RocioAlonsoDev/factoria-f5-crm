<?php

namespace App\Listeners;

use App\Events\StatusDiscardedEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Mail\StatusDiscardedMail;
use Illuminate\Support\Facades\Mail;

class SendStatusDiscardedEmail
{
    
    public function __construct()
    {
        
    }

   
    public function handle(StatusDiscardedEvent $event): void
    {
        if ($event->person->id_status == 3) {
            Mail::to($event->person->email)->send(new StatusDiscardedMail($event->person-> name));
        }
    }
}
