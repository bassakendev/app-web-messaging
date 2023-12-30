<?php

use Illuminate\Database\Eloquent\Model;

class Participant extends Model
{
    protected $table = 'participants';
    protected $fillable = [
        'user_id',
        'discussion_id'
    ];
}
