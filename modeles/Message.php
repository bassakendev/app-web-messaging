<?php

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $table = 'messages';
    protected $fillable = [
        'content',
        'type',
        'file',
        'discussion_id',
        'user_id'
    ];
}
