<?php
class File
{
    public $name;
    public $date;
    public $lastDate;
    public $type;
    public $size;

    public function __construct($name/* , $date, $lastDate, $type, $size*/)
    {
        $this->name = $name;
        // $this->date = $date;
        // $this->lastDate = $lastDate;
        // $this->type = $type;
        // $this->size= $size;
    }
    public function get_name()
    {
        return $this->name;
    }
}
