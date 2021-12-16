<?php
// Music extension, https://github.com/GiovanniSalmeri/yellow-music

class YellowMusic {
    const VERSION = "0.8.18";
    public $yellow;         // access to API
    
    // Handle initialisation
    public function onLoad($yellow) {
        $this->yellow = $yellow;
        $this->yellow->system->setDefault("musicReflow", "1");
    }

    // Handle page extra data
    public function onParsePageExtra($page, $name) {
        $output = null;
        if ($name=="header") {
            $extensionLocation = $this->yellow->system->get("coreServerBase").$this->yellow->system->get("coreExtensionLocation");
            $musicReflow = $this->yellow->system->get("musicReflow");
            $output .= "<script type=\"text/javascript\">var musicReflow = ".json_encode((bool)$musicReflow)."</script>\n";
            $output .= "<script type=\"text/javascript\" src=\"{$extensionLocation}abcjs-basic-min.js\"></script>\n";
            $output .= "<script type=\"text/javascript\" defer=\"defer\" src=\"{$extensionLocation}music.js\"></script>\n";
        }
        return $output;
    }
}
