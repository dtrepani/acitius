<div class="{{ $id }} card" role="tab">
    <a
        title="{{ $name }}"
        id="{{ $id }}"
        class="title collapsed
            @if(isset($class))
                {{ $class }}
            @endif
        "

        @if(isset($subnav))
            role="tab"
            data-target="#sub-{{ $id }}"
            data-toggle="collapse"
            data-parent="#nav-accordion"
            aria-controls="sub-{{ $id }}"
        @else
            href="{{ $link }}"
        @endif
    >
        <i class="fa fa-fw fa-{{ $icon }}" aria-hidden="true"></i>
        <span class="name" title="{{ $name }}">{{ $name }}</span>

        @if(isset($subnav))
            <div class="subnav indicator">
                <i class="subnav fa fa-fw fa-angle-right" aria-hidden="true"></i>
            </div>
        @endif
    </a>

    @if(isset($subnav))
        <ul
                id="sub-{{ $id }}"
                class="main-subnav collapse"
                role="tabpanel"
                aria-labelledby="{{ $id }}"
        >
            @foreach($subnav as $item)
                <li>
                    <a href="{{ $item['link'] }}" title="{{ $item['name'] }}">{{ $item['name'] }}</a>
                </li>
            @endforeach
        </ul>
    @endif
</div>
