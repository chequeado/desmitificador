<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Question extends Model {

	use \Sortable;

    protected $table = 'question';

    protected $guarded = ['id'];

    
}
