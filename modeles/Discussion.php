<?php

use Illuminate\Database\Eloquent\Model;

class Conversation extends Model
{
    protected $table = 'discussions';
    protected $fillable = ['name'];
}
