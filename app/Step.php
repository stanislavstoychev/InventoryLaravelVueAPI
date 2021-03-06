<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Step extends Model
{
    protected $guarded = [];

    public function part() {
        return $this->belongsTo('App\Part');
    }
}
