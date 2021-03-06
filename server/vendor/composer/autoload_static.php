<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitbd33e7156d65c21c7c426c3f0b8c68d4
{
    public static $prefixLengthsPsr4 = array (
        'T' => 
        array (
            'Twilio\\' => 7,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Twilio\\' => 
        array (
            0 => __DIR__ . '/..' . '/twilio/sdk/src/Twilio',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitbd33e7156d65c21c7c426c3f0b8c68d4::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitbd33e7156d65c21c7c426c3f0b8c68d4::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitbd33e7156d65c21c7c426c3f0b8c68d4::$classMap;

        }, null, ClassLoader::class);
    }
}
