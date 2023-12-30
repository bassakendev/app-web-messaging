<?php

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $table = 'messages';
    protected $fillable = [
        'content',
        'type',
        'file_path',
        'discussion_id',
        'user_id'
    ];
}
