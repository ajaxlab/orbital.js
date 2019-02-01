/*
 * orbital.js
 *
 * Copyright (c) 2019 NAVER Corp.
 * Licensed under the MIT
 */

import Base from '../bases/Base';

class ContributableServiceDescriptor extends Base {

    constructor(provider, version, id, spec, desc) {
        super();
        this.define('provider', provider);
        this.define('version', version);
        this.define('id', id);
        this.define('spec', spec || {});
        this.define('desc', desc || '');
        Object.freeze(this);
    }

    getServicePoint() {
        return `${this.provider}@${this.version}:${this.id}`;
    }
}

export default ContributableServiceDescriptor;
